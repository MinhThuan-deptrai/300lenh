const axios = require('axios');
const ytdl = require('ytdl-core');
const fs = require('fs-extra');
const request = require('request');

module.exports.run = async function ({ api: e, event: a, args: t }) {
    if (t.length === 0 || !t) {
        return e.sendMessage("» Bạn chưa nhập tên bài hát! Vui lòng thử lại.", a.threadID, a.messageID);
    }

    const query = t.join(" "); // Từ khóa tìm kiếm
    const numResults = 10; // Lấy 10 video đầu tiên

    const apiKey = "YOUR_YOUTUBE_API_KEY"; // Thay thế bằng API key của bạn
    try {
        // Gửi yêu cầu tìm kiếm video YouTube
        const searchResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                part: 'snippet',
                q: query,
                type: 'video',
                maxResults: numResults,
                key: apiKey
            }
        });

        const searchResults = searchResponse.data.items;
        if (searchResults.length === 0) {
            return e.sendMessage("Không tìm thấy video nào với từ khóa bạn nhập.", a.threadID, a.messageID);
        }

        let videoList = "";
        let videoLinks = [];

        // Lặp qua các video tìm thấy và tạo danh sách
        for (let i = 0; i < searchResults.length; i++) {
            const video = searchResults[i];
            const videoId = video.id.videoId;
            const videoTitle = video.snippet.title;

            // Lấy thông tin chi tiết của video, bao gồm số lượt xem và số lượt like
            const videoDetails = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
                params: {
                    part: 'statistics',
                    id: videoId,
                    key: apiKey
                }
            });

            const stats = videoDetails.data.items[0].statistics;
            const views = stats.viewCount;
            const likes = stats.likeCount;

            videoLinks.push(videoId);

            videoList += `${i + 1}. ${videoTitle}\n   Lượt xem: ${views}\n   Lượt thích: ${likes}\n\n`;
        }

        // Gửi danh sách video tìm được
        const message = `»🔎 Có ${videoLinks.length} video trùng với từ khóa của bạn:\n\n${videoList}» Hãy reply (phản hồi theo số thứ tự) để chọn video.`;
        e.sendMessage({ body: message }, a.threadID, a.messageID);

        // Lưu lại các video ID để bot có thể gửi file âm thanh khi người dùng reply
        global.client.handleReply.push({
            name: this.config.name,
            messageID: a.messageID,
            author: a.senderID,
            videoLinks: videoLinks
        });

    } catch (error) {
        console.error("Error fetching video data:", error);
        return e.sendMessage("Không thể xử lý yêu cầu do lỗi từ API YouTube.", a.threadID, a.messageID);
    }
};

module.exports.handleReply = async function ({ api: e, event: a, handleReply: t }) {
    const videoLinks = t.videoLinks;
    const videoIndex = parseInt(a.body) - 1; // Số thứ tự bài hát (lấy từ reply)

    if (isNaN(videoIndex) || videoIndex < 0 || videoIndex >= videoLinks.length) {
        return e.sendMessage("» Vui lòng chọn một số hợp lệ trong danh sách!", a.threadID, a.messageID);
    }

    const videoId = videoLinks[videoIndex];
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    try {
        // Lấy thông tin video và âm thanh từ YouTube
        const info = await ytdl.getInfo(videoUrl);
        const audioFormat = ytdl.chooseFormat(info.formats, { filter: 'audioonly' });

        const audioStream = ytdl(videoUrl, { format: audioFormat });
        const filePath = __dirname + "/cache/audio.mp3";
        const fileWriteStream = fs.createWriteStream(filePath);
        
        // Ghi âm thanh vào file
        audioStream.pipe(fileWriteStream);

        audioStream.on('end', () => {
            // Gửi file âm thanh khi tải xong
            e.sendMessage({
                body: `» Đang phát nhạc: ${info.videoDetails.title}`,
                attachment: fs.createReadStream(filePath)
            }, a.threadID, (err, messageID) => {
                // Xóa file âm thanh sau khi gửi xong
                fs.unlinkSync(filePath);
            }, a.messageID);
        });

    } catch (error) {
        console.error("Error fetching audio from video:", error);
        return e.sendMessage("Không thể tải âm thanh từ video này.", a.threadID, a.messageID);
    }
};
