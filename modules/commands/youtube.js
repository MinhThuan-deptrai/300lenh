module.exports.config = {
    name: "media",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Minh Thuannn",
    description: "Phát video thông qua link YouTube hoặc từ khoá tìm kiếm",
    commandCategory: "Người dùng",
    usages: "[searchVideos]",
    cooldowns: 10,
    dependencies: {
const axios = require('axios');  // Thư viện axios để gửi HTTP request

module.exports.run = async function ({ api: e, event: a, args: t }) {
    if (t.length === 0 || !t) return e.sendMessage("» Phần tìm kiếm không được để trống!", a.threadID, a.messageID);

    const query = t.join(" ");
    const apiKey = "AIzaSyB6kOvDm7RgXWtPX02-UkA8hSRSrVpNMKw";  // API key của bạn

    try {
        // Gửi yêu cầu tìm kiếm video YouTube
        const searchResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                part: "snippet",
                q: query,
                type: "video",
                maxResults: 6,
                key: apiKey
            }
        });

        const searchResults = searchResponse.data.items;
        if (searchResults.length === 0) {
            return e.sendMessage("Không tìm thấy video nào với từ khóa bạn nhập.", a.threadID, a.messageID);
        }

        let videoList = "";
        const videoLinks = [];

        // Lặp qua các video tìm thấy và tạo danh sách
        for (let i = 0; i < searchResults.length; i++) {
            const video = searchResults[i];
            const videoId = video.id.videoId;
            const videoTitle = video.snippet.title;
            const videoDescription = video.snippet.description;

            // Lưu các video ID vào danh sách
            videoLinks.push(videoId);

            // Tạo chuỗi danh sách video trả về cho người dùng
            videoList += `${i + 1}. ${videoTitle}\n   ${videoDescription}\n\n`;
        }

        // Gửi thông tin video tìm được đến người dùng
        const message = `»🔎 Có ${videoLinks.length} video trùng với từ khóa của bạn:\n\n${videoList}» Hãy reply (phản hồi theo số thứ tự) để chọn video.`;
        e.sendMessage({ body: message }, a.threadID, (response) => {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: response.messageID,
                author: a.senderID,
                link: videoLinks
            });
        }, a.messageID);

    } catch (error) {
        console.error("Error during YouTube API search:", error);
        return e.sendMessage("Không thể xử lý request do lỗi từ API.", a.threadID, a.messageID);
    }
};
