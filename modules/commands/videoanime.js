let isvideoanime = true;
module.exports.config = {
  name: "videoanime",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "",
  description: "chỉ cần nhắn video anime, Vdanime",
  commandCategory: "Video",
  usages: "chỉ cần nhắn video anime, Vdanime",
  cooldowns: 0,
  dependencies: {
    "fs-extra": "",
    "request": ""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (!isvideoanime) return;
  if (event.body.indexOf("video anime") == 0 || event.body.indexOf("Video anime") == 0 || event.body.indexOf("Vdanime") == 0) {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    api.sendMessage("Hình như bạn muốn xem anime\nChờ mình một chút nha.", event.threadID, event.messageID);
    var link = [
      "https://i.imgur.com/yXmwWRn.mp4",
      "https://i.imgur.com/bGbUEuB.mp4",
      "https://i.imgur.com/sXpNXzp.mp4",
      "https://i.imgur.com/S1QMCtt.mp4",
      "https://i.imgur.com/0mADwWP.mp4",
      "https://i.imgur.com/rnhcpv8.mp4",
      "https://i.imgur.com/gi5VtDj.mp4",
      "https://i.imgur.com/gpGq8Rz.mp4",
      "https://i.imgur.com/y1C6YqX.mp4",
      "https://i.imgur.com/83BA3L0.mp4",
      "https://i.imgur.com/OLgehvl.mp4",
      "https://i.imgur.com/SWINAmC.mp4",
      "https://i.imgur.com/iEDBQcM.mp4",
      "https://i.imgur.com/c3BqoXV.mp4",
      "https://i.imgur.com/9FeoxqQ.mp4",
      "https://i.imgur.com/Y80DcM9.mp4",
      "https://i.imgur.com/MpPGjjz.mp4",
      "https://i.imgur.com/BNS4xZk.mp4",
      "https://i.imgur.com/UWbEfhN.mp4",
      "https://i.imgur.com/apoBMiH.mp4",
      "https://i.imgur.com/XNk8L61.mp4",
      "https://i.imgur.com/NqYh8QQ.mp4",
      "https://i.imgur.com/tE1vqgv.mp4",
      "https://i.imgur.com/1E32c69.mp4",
      "https://i.imgur.com/pe8wbpk.mp4",
      "https://i.imgur.com/x818gBi.mp4",
      "https://i.imgur.com/EE6yFDf.mp4",
      "https://i.imgur.com/6g4Abkd.mp4",
      "https://i.imgur.com/pgTByLl.mp4",
      "https://i.imgur.com/axZSwP5.mp4",
      "https://i.imgur.com/SVqByRi.mp4",
      "https://i.imgur.com/IpGGWqI.mp4",
      "https://i.imgur.com/ak4Ufsz.mp4",
      "https://i.imgur.com/X8tOhWY.mp4",
      "https://i.imgur.com/ASbiICR.mp4",
      "https://i.imgur.com/jmJqneU.mp4",
      "https://i.imgur.com/dP2qiYG.mp4",
      "https://i.imgur.com/3bTruRd.mp4",
      "https://i.imgur.com/Ud9R04f.mp4",
      "https://i.imgur.com/vxQ0ALk.mp4",
      "https://i.imgur.com/P1c4v43.mp4",
      "https://i.imgur.com/BcbVeBP.mp4",
      "https://i.imgur.com/LaEHPw9.mp4",
      "https://i.imgur.com/6RnSaFW.mp4",
      "https://i.imgur.com/u80RQlL.mp4",
      "https://i.imgur.com/MEZkXS2.mp4",
      "https://i.imgur.com/MiL7BGF.mp4",
      "https://i.imgur.com/WH6edoq.mp4",
      "https://i.imgur.com/8xJjbIH.mp4",
      "https://i.imgur.com/GfcTwy9.mp4",
      "https://i.imgur.com/7RHMuFO.mp4",
      "https://i.imgur.com/4M1QBuz.mp4",
      "https://i.imgur.com/OYdyML6.mp4",
      "https://i.imgur.com/Nghrx6g.mp4",
      "https://i.imgur.com/HplKuN5.mp4",
      "https://i.imgur.com/CLZt0fa.mp4",
      "https://i.imgur.com/SyLwNXl.mp4",
      "https://i.imgur.com/3Y2IgVA.mp4",
      "https://i.imgur.com/5VaEWKu.mp4",
      "https://i.imgur.com/PcKkUB4.mp4",
      "https://i.imgur.com/HtnBWC6.mp4",
      "https://i.imgur.com/ZtPj2Hj.mp4",
      "https://i.imgur.com/lIbsds2.mp4",
      "https://i.imgur.com/Sbk0J2U.mp4",
      "https://i.imgur.com/Aj7be4U.mp4",
      "https://i.imgur.com/dcMnWMH.mp4",
      "https://i.imgur.com/CIZUWte.mp4",
      "https://i.imgur.com/XVD4GCr.mp4",
      "https://i.imgur.com/m57w23u.mp4",
      "https://i.imgur.com/ylXQA0R.mp4",
      "https://i.imgur.com/JWo7Rj6.mp4",
      "https://i.imgur.com/eEXTCiJ.mp4",
      "https://i.imgur.com/jJKZ8M0.mp4",
      "https://i.imgur.com/TTcUuqn.mp4",
      "https://i.imgur.com/8cf8VQv.mp4",
      "https://i.imgur.com/JhRR4w0.mp4",
      "https://i.imgur.com/CYAySrg.mp4",
      "https://i.imgur.com/uNvLw8F.mp4",
      "https://i.imgur.com/8xcyhxO.mp4",
      "https://i.imgur.com/mfb95ud.mp4",
      "https://i.imgur.com/7XTA4qn.mp4",
      "https://i.imgur.com/bCJy3M1.mp4",
      "https://i.imgur.com/tWgvBR3.mp4",
      "https://i.imgur.com/QlkdWlG.mp4",
      "https://i.imgur.com/MOCvmUE.mp4",
      "https://i.imgur.com/MXR4xzR.mp4",
      "https://i.imgur.com/SEDHzNr.mp4",
      "https://i.imgur.com/pqjtgFS.mp4",
      "https://i.imgur.com/6y3Wgk4.mp4",
      "https://i.imgur.com/EsbOUvz.mp4",
      "https://i.imgur.com/pX10O8I.mp4",
      "https://i.imgur.com/xZgKiBD.mp4",
      "https://i.imgur.com/O1OpB5a.mp4",
      "https://i.imgur.com/LxoOdt4.mp4",
      "https://i.imgur.com/ru98Qa8.mp4",
      "https://i.imgur.com/dRZzs3k.mp4",
      "https://i.imgur.com/mLDhyeZ.mp4",
      "https://i.imgur.com/SqjHpUX.mp4",
      "https://i.imgur.com/hXl02GI.mp4",
      "https://i.imgur.com/fsmlWbN.mp4",
      "https://i.imgur.com/voHNL7N.mp4",
      "https://i.imgur.com/IZ91gXB.mp4",
      "https://i.imgur.com/np2Q1aj.mp4",
      "https://i.imgur.com/jJ37JJm.mp4",
      "https://i.imgur.com/PAUWmN8.mp4",
      "https://i.imgur.com/H0HZrHN.mp4",
      "https://i.imgur.com/869Hj8s.mp4",
      "https://i.imgur.com/wu01Gms.mp4",
      "https://i.imgur.com/mRqbv3L.mp4",
      "https://i.imgur.com/QSNHIsN.mp4",
      "https://i.imgur.com/f7s3IME.mp4",
      "https://i.imgur.com/BCg60DQ.mp4",
      "https://i.imgur.com/vUlDjQp.mp4",
      "https://i.imgur.com/MZ24903.mp4",
      "https://i.imgur.com/8C3tkAj.mp4",
      "https://i.imgur.com/MQ6GyuZ.mp4",
      "https://i.imgur.com/JCVvSio.mp4",
      "https://i.imgur.com/QFCHGZu.mp4",
      "https://i.imgur.com/6qIKkvf.mp4",
      "https://i.imgur.com/Uf3bkhG.mp4",
      "https://i.imgur.com/VUX1f5q.mp4",
      "https://i.imgur.com/NjvdsDx.mp4",
      "https://i.imgur.com/fIWCGkV.mp4",
      "https://i.imgur.com/3e7rCC2.mp4",
      "https://i.imgur.com/THZLbFy.mp4",
      "https://i.imgur.com/iUyOq33.mp4",
      "https://i.imgur.com/o14Z5Q6.mp4",
      "https://i.imgur.com/yMfosnw.mp4",
      "https://i.imgur.com/zT8oHG8.mp4",
      "https://i.imgur.com/PmiZtKo.mp4",
      "https://i.imgur.com/1ibrp7n.mp4",
      "https://i.imgur.com/d0mIk7i.mp4",
      "https://i.imgur.com/Sa2F3xI.mp4",
      "https://i.imgur.com/adTko0s.mp4",
      "https://i.imgur.com/LSQF1fo.mp4",
      "https://i.imgur.com/yTs4Zr4.mp4",
      "https://i.imgur.com/Sa2F3xI.mp4",
      "https://i.imgur.com/O9rxnFk.mp4",
      "https://i.imgur.com/TcEfOM2.mp4",
      "https://i.imgur.com/fizefIf.mp4",
      "https://i.imgur.com/OCiLA50.mp4",
      "https://i.imgur.com/x7wwddZ.mp4",
      "https://i.imgur.com/94lNxgu.mp4",
      "https://i.imgur.com/WGJ2bRs.mp4",
      "https://i.imgur.com/G2jhc3i.mp4",
      "https://i.imgur.com/Bignxwa.mp4",
      "https://i.imgur.com/2bgfxp3.mp4",
      "https://i.imgur.com/MQUJNlc.mp4",
      "https://i.imgur.com/ZCeLq7H.mp4",
      "https://i.imgur.com/zanzgNn.mp4",
      "https://i.imgur.com/9slvvhC.mp4",
      "https://i.imgur.com/R4uYMsI.mp4",
      "https://i.imgur.com/gYQJMUW.mp4",
      "https://i.imgur.com/20gZzb1.mp4",
      "https://i.imgur.com/NGDakxL.mp4",
      "https://i.imgur.com/kZJYB6z.mp4",
      "https://i.imgur.com/OFBBzi7.mp4",
      "https://i.imgur.com/Cf5YhTp.mp4",
      "https://i.imgur.com/9GPECna.mp4",
      "https://i.imgur.com/6mAaiig.mp4",
      "https://i.imgur.com/QT3Wccr.mp4",
      "https://i.imgur.com/BAUyi0i.mp4",
      "https://i.imgur.com/9mt5uQ9.mp4",
      "https://i.imgur.com/tNmxI10.mp4",
      "https://i.imgur.com/mlxpDez.mp4",
      "https://i.imgur.com/gkJgysl.mp4",
      "https://i.imgur.com/sWK6B05.mp4",
      "https://i.imgur.com/yG97dVV.mp4",
      "https://i.imgur.com/aYOuJz5.mp4",
      "https://i.imgur.com/iGYbVki.mp4",
      "https://i.imgur.com/XzgivmH.mp4",
      "https://i.imgur.com/r1CtIqU.mp4",
      "https://i.imgur.com/NtmTF85.mp4",
      "https://i.imgur.com/3tHKYgd.mp4",
      "https://i.imgur.com/q8q9dwy.mp4",
      "https://i.imgur.com/nHPNoVs.mp4",
      "https://i.imgur.com/5UJsfSX.mp4",
      "https://i.imgur.com/SqI58hS.mp4",
      "https://i.imgur.com/kzJK1xU.mp4",
      "https://i.imgur.com/XAqmhds.mp4",
      "https://i.imgur.com/J4GkW5w.mp4",
      "https://i.imgur.com/vSYMhIe.mp4",
      "https://i.imgur.com/Wt4m1Uf.mp4",
      "https://i.imgur.com/vDurfRa.mp4",
      "https://i.imgur.com/F8RhBMG.mp4",
      "https://i.imgur.com/pGmt6mQ.mp4",
      "https://i.imgur.com/TKtg9H8.mp4",
      "https://i.imgur.com/ZCXEEoI.mp4",
      "https://i.imgur.com/S7yGxq3.mp4",
      "https://i.imgur.com/XzgivmH.mp4",
      "https://i.imgur.com/2xMgE77.mp4",
      "https://i.imgur.com/aYOuJz5.mp4",
      "https://i.imgur.com/iGYbVki.mp4",
      "https://i.imgur.com/LKwDIxW.mp4",
      "https://i.imgur.com/aYOuJz5.mp4",
      "https://i.imgur.com/3t2io2m.mp4",
      "https://i.imgur.com/UlmoqB4.mp4",
      "https://i.imgur.com/WgT7lf7.mp4",
      "https://i.imgur.com/4vQwCDj.mp4",
      "https://i.imgur.com/GtUfTHg.mp4",
      "https://i.imgur.com/3EzsldO.mp4",
      "https://i.imgur.com/krhXCYP.mp4",
      "https://i.imgur.com/J0jpQZT.mp4",
      "https://i.imgur.com/GM22QHF.mp4",
      "https://i.imgur.com/XkofsA8.mp4",
      "https://i.imgur.com/yLwSTHP.mp4",
      "https://i.imgur.com/J7hkYwy.mp4",
      "https://i.imgur.com/0UV219s.mp4",
      "https://i.imgur.com/G0bLNUJ.mp4",
      "https://i.imgur.com/0d5ZgRm.mp4",
      "https://i.imgur.com/Fo8ZD79.mp4",
      "https://i.imgur.com/R4ahRlc.mp4",
      "https://i.imgur.com/k2GRkgf.mp4",
      "https://i.imgur.com/K4WllIW.mp4",
      "https://i.imgur.com/Cx4TQyX.mp4",
      "https://i.imgur.com/H2865lJ.mp4",
      "https://i.imgur.com/vCbrxRn.mp4",
      "https://i.imgur.com/OXCGkEp.mp4",
      "https://i.imgur.com/jlmECIM.mp4",
      "https://i.imgur.com/HCBYfUn.mp4",
      "https://i.imgur.com/tAmVhh5.mp4",
      "https://i.imgur.com/ojt5Pou.mp4",
      "https://i.imgur.com/MzU67E6.mp4",
      "https://i.imgur.com/2fHPmRq.mp4",
      "https://i.imgur.com/lhYdyUT.mp4",
      "https://i.imgur.com/VkVM1US.mp4",
      "https://i.imgur.com/ojt5Pou.mp4",
      "https://i.imgur.com/arbi4DK.mp4",
      "https://i.imgur.com/8h23MAZ.mp4",
      "https://i.imgur.com/rRMf47S.mp4",
      "https://i.imgur.com/VkVM1US.mp4",
      "https://i.imgur.com/pW0zCKF.mp4",
      "https://i.imgur.com/arbi4DK.mp4",
      "https://i.imgur.com/8h23MAZ.mp4",
      "https://i.imgur.com/R1v7i9p.mp4",
      "https://i.imgur.com/UjzN6wh.mp4",
      "https://i.imgur.com/uZY6C3Z.mp4",
      "https://i.imgur.com/3KlNh8C.mp4",
      "https://i.imgur.com/6UzVMwL.mp4",
      "https://i.imgur.com/g3Z55z1.mp4",
      "https://i.imgur.com/brDS2kc.mp4",
      "https://i.imgur.com/cSluyGh.mp4",
      "https://i.imgur.com/WUJyeMB.mp4",
      "https://i.imgur.com/kIyC0Fy.mp4",
      "https://i.imgur.com/v8L0Z7o.mp4",
      "https://i.imgur.com/uZY6C3Z.mp4",
      "https://i.imgur.com/2BoMRkc.mp4",
      "https://i imgur.com/5vJc0Sx.mp4",
      "https://i.imgur.com/zu06v3Z.mp4",
      "https://i.imgur.com/PUBA5eQ.mp4",
      "https://i.imgur.com/P0g76I6.mp4",
      "https://i.imgur.com/xwwPHDT.mp4",
      "https://i.imgur.com/envxZdQ.mp4",
      "https://i.imgur.com/OWmVzHg.mp4",
      "https://i.imgur.com/8yPcqlu.mp4",
      "https://i.imgur.com/VtUs9EE.mp4",
      "https://i.imgur.com/y6n6QPh.mp4",
      "https://i.imgur.com/nPA9V37.mp4",
      "https://i.imgur.com/ubGTMQB.mp4",
      "https://i.imgur.com/UBKXK8v.mp4",
      "https://i.imgur.com/VaTa6SA.mp4",
      "https://i.imgur.com/KpDyqtX.mp4",
      "https://i.imgur.com/qQf9xNg.mp4",
      "https://i.imgur.com/QL49Hve.mp4",
      "https://i.imgur.com/cb7tqm3.mp4",
      "https://i.imgur.com/2JL5Zb7.mp4",
      "https://i.imgur.com/7FOMBAE.mp4",
      "https://i.imgur.com/CTpVbbf.mp4",
      "https://i.imgur.com/swiKfQx.mp4",
      "https://i.imgur.com/HY2F8gg.mp4",
      "https://i.imgur.com/LrFENbH.mp4",
      "https://i.imgur.com/hGPQ2Ca.mp4",
      "https://i.imgur.com/AggzTzb.mp4",
      "https://i.imgur.com/19mT2vt.mp4",
      "https://i.imgur.com/iK1sTSc.mp4",
      "https://i.imgur.com/RIXOHK7.mp4",
      "https://i.imgur.com/j3dnjCC.mp4",
      "https://i.imgur.com/nSjDAY0.mp4",
      "https://i.imgur.com/hrKfsre.mp4",
      "https://i.imgur.com/cl6nDtR.mp4",
      "https://i.imgur.com/J7AeGlS.mp4",
      "https://i.imgur.com/fEuXl5E.mp4",
      "https://i.imgur.com/kMNuv22.mp4",
      "https://i.imgur.com/XmSH5A4.mp4",
      "https://i.imgur.com/lixK2bU.mp4",
      "https://i.imgur.com/yIkrtwJ.mp4",
      "https://i.imgur.com/sXLPpEK.mp4",
      "https://i.imgur.com/FL5giD8.mp4",
      "https://i.imgur.com/DNOixJY.mp4",
      "https://i.imgur.com/MkckJzs.mp4",
      "https://i.imgur.com/lMuLeWw.mp4",
      "https://i.imgur.com/z7FFRdT.mp4",
      "https://i.imgur.com/v6YW8jw.mp4",
      "https://i.imgur.com/8prFZex.mp4",
      "https://i.imgur.com/ehm6LFq.mp4",
      "https://i.imgur.com/YfAz1yj.mp4",
      "https://i.imgur.com/QQRY3Zk.mp4",
      "https://i.imgur.com/gK8y8ek.mp4",
      "https://i.imgur.com/Y5hRZBr.mp4",
      "https://i.imgur.com/SPHMIxg.mp4",
      "https://i.imgur.com/1vaSksV.mp4",
      "https://i.imgur.com/Qk1wVum.mp4",
      "https://i.imgur.com/vaXJcOa.mp4",
      "https://i.imgur.com/ce83kHS.mp4",
      "https://i.imgur.com/13FYyFP.mp4",
      "https://i.imgur.com/bql3r81.mp4",
      "https://i.imgur.com/qlBs6QU.mp4",
      "https://i.imgur.com/hytj4xV.mp4",
      "https://i.imgur.com/bprNgcA.mp4",
      "https://i.imgur.com/lCNR2F8.mp4",
      "https://i.imgur.com/6Mw45Wc.mp4",
      "https://i.imgur.com/ByPGe8z.mp4",
      "https://i.imgur.com/iBzmU90.mp4",
      "https://i.imgur.com/xwotzq5.mp4",
      "https://i.imgur.com/2lbhYSO.mp4",
      "https://i.imgur.com/AzBPWbx.mp4",
      "https://i.imgur.com/yqPoTTD.mp4",
      "https://i.imgur.com/bj8JY1q.mp4",
      "https://i.imgur.com/OvmKQf0.mp4",
      "https://i.imgur.com/C0zaZZV.mp4",
      "https://i.imgur.com/Hia1kgw.mp4",
      "https://i.imgur.com/5NWlDqI.mp4",
      "https://i.imgur.com/DzVF3Xd.mp4",
      "https://i.imgur.com/0vm2yEs.mp4",
      "https://i.imgur.com/mBK4DL2.mp4",
      "https://i.imgur.com/iFlIy4X.mp4",
      "https://i.imgur.com/zfy4cdg.mp4",
      "https://i.imgur.com/EE9C4nn.mp4",
      "https://i.imgur.com/6iKWM6A.mp4",
      "https://i.imgur.com/xtL0vKD.mp",
      "https://i.imgur.com/MrWplR5.mp4",
      "https://i.imgur.com/38awhBh.mp4",
      "https://i.imgur.com/IybO14I.mp4",
      "https://i.imgur.com/RSsJj2x.mp4",
      "https://i.imgur.com/Jj4tvMG.mp4",
      "https://i.imgur.com/6S2iS5N.mp4",
      "https://i.imgur.com/iOowufh.mp4",
      "https://i.imgur.com/GOUVti8.mp4",
      "https://i.imgur.com/qv6Mula.mp4",
      "https://i.imgur.com/kHWvd6L.mp4",
      "https://i.imgur.com/4uqnBwh.mp4",
      "https://i.imgur.com/yxPxoTk.mp4",
      "https://i.imgur.com/3fYdzKi.mp4",
      "https://i.imgur.com/YKunVev.mp4",
      "https://i.imgur.com/txu2ZY9.mp4",
      "https://i.imgur.com/uHBhxJu.mp4",
      "https://i.imgur.com/XKaKER4.mp4",
      "https://i.imgur.com/mOJDMhl.mp4",
      "https://i.imgur.com/lwfD4r5.mp4",
      "https://i.imgur.com/jabz5y7.mp4",
      "https://i.imgur.com/h0866u4.mp4",
      "https://i.imgur.com/EgwySrT.mp4",
      "https://i.imgur.com/u3vpBd3.mp4",
      "https://i.imgur.com/OxcOwjr.mp4",
      "https://i.imgur.com/ZKpXq4m.mp4",
      "https://i.imgur.com/VY9w95O.mp4",
      "https://i.imgur.com/RR8jDqO.mp4",
      "https://i.imgur.com/PyWTHWL.mp4",
      "https://i.imgur.com/cQ1K2de.mp4",
      "https://i.imgur.com/U4TD4s5.mp4",
      "https://i.imgur.com/tVfyVUv.mp4",
      "https://i.imgur.com/zO36tlx.mp4",
      "https://i.imgur.com/g1BuXTQ.mp4",
      "https://i.imgur.com/estt2We.mp4",
      "https://i.imgur.com/mLzOqdS.mp4",
      "https://i.imgur.com/zUu50mm.mp4",
      "https://i.imgur.com/Mnb8ZlI.mp4",
      "https://i.imgur.com/siUW6Jp.mp4",
      "https://i.imgur.com/ZO9WmEo.mp4",
      "https://i.imgur.com/hZCz36h.mp4",
      "https://i.imgur.com/poyx7nP.mp4",
      "https://i.imgur.com/aQUp16W.mp4",
      "https://i.imgur.com/sgrFwbX.mp4",
      "https://i.imgur.com/iRWqN6R.mp4",
      "https://i.imgur.com/hSAJDsk.mp4",
      "https://i.imgur.com/imWj1Id.mp4",
      "https://i.imgur.com/VKm8NiW.mp4",
      "https://i.imgur.com/1O0M5Qw.mp4",
      "https://i.imgur.com/FQG8qGO.mp4",
      "https://i.imgur.com/xAextsA.mp4",
      "https://i.imgur.com/wSR0DAo.mp4",
      "https://i.imgur.com/sexPmRz.mp4",
      "https://i.imgur.com/4eNxF6U.mp4",
      "https://i.imgur.com/5Xpf3cP.mp4",
      "https://i.imgur.com/ldX0qPY.mp4",
      "https://i.imgur.com/Rb1ARuz.mp4",
      "https://i.imgur.com/4FxQawG.mp4",
      "https://i.imgur.com/E35ATHn.mp4",
      "https://i.imgur.com/XqZlv2B.mp4",
      "https://i.imgur.com/7cT4jX0.mp4",
      "https://i.imgur.com/ZF64DDC.mp4",
      "https://i.imgur.com/zs3mHJ7.mp4",
      "https://i.imgur.com/5671YWP.mp4",
      "https://i.imgur.com/j7eduM7.mp4",
      "https://i.imgur.com/qLkjdG7.mp4",
      "https://i.imgur.com/q44zk71.mp4",
      "https://i.imgur.com/P5ga5qD.mp4",
      "https://i.imgur.com/5bw8njP.mp4",
      "https://i.imgur.com/aSwHJWJ.mp4",
      "https://i.imgur.com/RK6Unhb.mp4",
      "https://i.imgur.com/sFIi3rZ.mp4",
      "https://i.imgur.com/5CcTGY4.mp4",
      "https://i.imgur.com/QYf1JUt.mp4",
      "https://i.imgur.com/WLMm0oA.mp4",
      "https://i.imgur.com/uImdamJ.mp4",
      "https://i.imgur.com/xn29pLP.mp4",
      "https://i.imgur.com/vXUFZPY.mp4",
      "https://i.imgur.com/j2Z08ja.mp4",
      "https://i.imgur.com/tVjs4Fl.mp4",
      "https://i.imgur.com/exCL6vw.mp4",
      "https://i.imgur.com/QqEsRio.mp4",
      "https://i.imgur.com/Lqz8vBX.mp4",
      "https://i.imgur.com/9QyZkgv.mp4",
      "https://i.imgur.com/W7Axwdg.mp4",
      "https://i.imgur.com/4ASl8r6.mp4",
      "https://i.imgur.com/lixTDB9.mp4",
      "https://i.imgur.com/xP1Ytzu.mp4",
      "https://i.imgur.com/hzf94GY.mp4",
      "https://i.imgur.com/hymqN5u.mp4",
      "https://i.imgur.com/BLmzQRo.mp4",
      "https://i.imgur.com/KWJyaS5.mp4",
      "https://i.imgur.com/DlRlLNH.mp4",
      "https://i.imgur.com/fpcLYvM.mp4",
      "https://i.imgur.com/5VrV3Mt.mp4",
      "https://i.imgur.com/V9qhftN.mp4",
      "https://i.imgur.com/4RWE0ve.mp4",
      "https://i.imgur.com/krBQTNU.mp4",
      "https://i.imgur.com/S3Srowd.mp4",
      "https://i.imgur.com/ce0hGMi.mp4",
      "https://i.imgur.com/pTvZVZi.mp4",
      "https://i.imgur.com/0RgD0zJ.mp4",
      "https://i.imgur.com/6LtOy2f.mp4",
      "https://i.imgur.com/9iSu9aa.mp4",
      "https://i.imgur.com/B5GDyPa.mp4",
      "https://i.imgur.com/sGuHy1x.mp4",
      "https://i.imgur.com/31oWDgf.mp4",
      "https://i.imgur.com/hXwYWTM.mp4",
      "https://i.imgur.com/rTosLi7.mp4",
      "https://i.imgur.com/zhSpG4U.mp4",
      "https://i.imgur.com/6MKfQEs.mp4",
      "https://i.imgur.com/PjMR6el.mp4",
      "https://i.imgur.com/YgIfXA0.mp4",
      "https://i.imgur.com/1QJHio1.mp4",
      "https://i.imgur.com/KIWU2on.mp4",
      "https://i.imgur.com/hzLRz5o.mp4",
      "https://i.imgur.com/eSxeo1C.mp4",
      "https://i.imgur.com/xyCkOSr.mp4",
      "https://i.imgur.com/FKNUiKI.mp4",
      "https://i.imgur.com/Cv0tEHE.mp4",
      "https://i.imgur.com/lm2DCjS.mp4",
      "https://i.imgur.com/PdaQfZc.mp4",
      "https://i.imgur.com/XmHAxVO.mp4",
      "https://i.imgur.com/68qf0Nu.mp4",
      "https://i.imgur.com/MKMMpnZ.mp4",
      "https://i.imgur.com/ctboQxb.mp4",
      "https://i.imgur.com/igcTSj5.mp4",
      "https://i.imgur.com/ohPF4dp.mp4",
      "https://i.imgur.com/hpHWWX9.mp4",
      "https://i.imgur.com/kDYeq9K.mp4",
      "https://i.imgur.com/ngBqa3t.mp4",
      "https://i.imgur.com/7uWOf1a.mp4",
      "https://i.imgur.com/ZsTqSNH.mp4",
      "https://i.imgur.com/dMkbbyu.mp4",
      "https://i.imgur.com/Pv159Ql.mp4",
      "https://i.imgur.com/S0ey5Rd.mp4",
      "https://i.imgur.com/MKPT68L.mp4",
      "https://i.imgur.com/L2WgwWn.mp4",
      "https://i.imgur.com/0PZi2W5.mp4",
      "https://i.imgur.com/kOpDBku.mp4",
      "https://i.imgur.com/JjCQW07.mp4",
      "https://i.imgur.com/I7cWxrw.mp4",
      "https://i.imgur.com/RFlhsmH.mp4",
      "https://i.imgur.com/Ek0bHuA.mp4",
      "https://i.imgur.com/SnQ85T9.mp4",
      "https://i.imgur.com/1QqKCvu.mp4",
      "https://i.imgur.com/y2aK7rX.mp4",
      "https://i.imgur.com/z0VLtIM.mp4",
      "https://i.imgur.com/c3wieTA.mp4",
      "https://i.imgur.com/O320FUs.mp4",
      "https://i.imgur.com/1sFSDkv.mp4",
      "https://i.imgur.com/namsDPk.mp4",
      "https://i.imgur.com/842S5AA.mp4",
      "https://i.imgur.com/t3oIe9s.mp4",
      "https://i.imgur.com/GzD1xIU.mp4",
      "https://i.imgur.com/jRmwCwc.mp4",
      "https://i.imgur.com/EQSRSLo.mp4",
"https://i.imgur.com/YoTbz4d.mp4",
"https://i.imgur.com/097B6D8.mp4",
"https://i.imgur.com/xrCInYm.mp4",
"https://i.imgur.com/GG6YPqe.mp4",
"https://i.imgur.com/agVVYx5.mp4",
"https://i.imgur.com/o8ao6XY.mp4",
"https://i.imgur.com/bbh1V26.mp4",
"https://i.imgur.com/S8ISdD6.mp4",
"https://i.imgur.com/pauY8KR.mp4",
"https://i.imgur.com/9hfEbGH.mp4",
"https://i.imgur.com/72bYCsn.mp4",
"https://i.imgur.com/I3NJ05u.mp4",
"https://i.imgur.com/B5U6d33.mp4",
"https://i.imgur.com/jUG4eIz.mp4",
"https://i.imgur.com/CGB6XmV.mp4",
"https://i.imgur.com/KZNijRx.mp4",
    "https://i.imgur.com/ANDGPv4.mp4",
      "https://i.imgur.com/hpDI3bw.mp4",
      "https://i.imgur.com/stcqzUk.mp4",
      "https://i.imgur.com/UxuJOTJ.mp4",
      "https://i.imgur.com/lQcXTch.mp4",
      "https://i.imgur.com/hMsIAvn.mp4",
      "https://i.imgur.com/HmcPhLC.mp4",
      "https://i.imgur.com/aKt47k0.mp4",
      "https://i.imgur.com/vmisIKs.mp4",
      "https://i.imgur.com/842S5AA.mp4",
      "https://i.imgur.com/DU0xNJ5.mp4",
      "https://i.imgur.com/1tgx5tI.mp4",
      "https://i.imgur.com/Q73D1LX.mp4",
      "https://i.imgur.com/VSh7JWQ.mp4",
      "https://i.imgur.com/IC73HJ9.mp4",
      "https://i.imgur.com/gvjAKox.mp4",
      "https://i.imgur.com/0tnC4LM.mp4",
      "https://i.imgur.com/75A44i9.mp4",
      "https://i.imgur.com/lZQN04e.mp4",
      "https://i.imgur.com/lOpisyj.mp4",
      "https://i.imgur.com/O320FUs.mp4",
      "https://i.imgur.com/k3oZRL5.mp4",
      "https://i.imgur.com/9I0PQID.mp4",
      "https://i.imgur.com/jRmwCwc.mp4",
      "https://i.imgur.com/FdOpSWr.mp4",
      "https://i.imgur.com/hF716fC.mp4",
      "https://i.imgur.com/14XJi6K.mp4",
      "https://i.imgur.com/iCksjMW.mp4",
      "https://i.imgur.com/Go7JQVO.mp4",
      "https://i.imgur.com/EQSRSLo.mp4",
      "https://i.imgur.com/JNJvrnS.mp4",
      "https://i.imgur.com/Bqx2xGM.mp4",
      "https://i.imgur.com/FxOq0OH.mp4",
      "https://i.imgur.com/Povo7aG.mp4",
      "https://i.imgur.com/mX8kJl6.mp4",
      "https://i.imgur.com/UoIywkq.mp4",
      "https://i.imgur.com/3OSRb1N.mp4",
      "https://i.imgur.com/SH08EvT.mp4",
      "https://i.imgur.com/RymLgq8.mp4",
      "https://i.imgur.com/IJUnurS.mp4",
      "https://i.imgur.com/3hnWCyC.mp4",
      "https://i.imgur.com/vEcFQwc.mp4",
      "https://i.imgur.com/mq6brRE.mp4",
      "https://i.imgur.com/YdAf6O3.mp4",
      "https://i.imgur.com/obCzZUO.mp4",
      "https://i.imgur.com/0QTxCnD.mp4",
      "https://i.imgur.com/t3oIe9s.mp4",
      "https://i.imgur.com/c3wieTA.mp4",
      "https://i.imgur.com/sFr9cDT.mp4",
      "https://i.imgur.com/qK1hoD5.mp4",
      "https://i.imgur.com/t8XxwRF.mp4",
      "https://i.imgur.com/y2aK7rX.mp4",
      "https://i.imgur.com/cMotfW4.mp4",
      "https://i.imgur.com/namsDPk.mp4",
      "https://i.imgur.com/z0VLtIM.mp4",
      "https://i.imgur.com/PrMkk8U.mp4",
      "https://i.imgur.com/JUG7s5Q.mp4",
      "https://i.imgur.com/1sFSDkv.mp4",
      "https://i.imgur.com/WwVviiO.mp4",
      "https://i.imgur.com/k3NeFB9.mp4",
      "https://i.imgur.com/zu7TZnT.mp4",
      "https://i.imgur.com/1mSpgCN.mp4",
      "https://i.imgur.com/VlsYtvA.mp4",
      "https://i.imgur.com/BuA4QYr.mp4",
      "https://i.imgur.com/GzD1xIU.mp4",
      "https://i.imgur.com/2VyifK2.mp4",
      "https://i.imgur.com/0Rwb0w1.mp4",
      "https://i.imgur.com/360Fm6X.mp4",
      "https://i.imgur.com/RuLS9Hj.mp4",
      "https://i.imgur.com/74w41Jm.mp4",
      "https://i.imgur.com/kxih52q.mp4",
      "https://files.catbox.moe/scqifh.mp4",
      "https://files.catbox.moe/2qn663.mp4",
      "https://files.catbox.moe/p3fdik.mp4",
      "https://files.catbox.moe/fej6g3.mp4",
      "https://files.catbox.moe/ukg2st.mp4",
      "https://files.catbox.moe/xrylxp.mp4",
      "https://files.catbox.moe/7dir7g.mp4",
      "https://files.catbox.moe/szf364.mp4",
      "https://files.catbox.moe/8t2tfz.mp4",
      "https://files.catbox.moe/nplg4a.mp4",
      "https://files.catbox.moe/nijfol.mp4",
      "https://files.catbox.moe/yjff9k.mp4",
      "https://files.catbox.moe/6zy3z2.mp4",
      "https://files.catbox.moe/28zf3a.mp4",
      "https://files.catbox.moe/71f8ap.mp4",
      "https://files.catbox.moe/leit50.mp4",
      "https://files.catbox.moe/p46d19.mp4",
      "https://files.catbox.moe/1moa0i.mp4",
      "https://files.catbox.moe/xkyuts.mp4",
      "https://files.catbox.moe/fl9qsv.mp4",
      "https://files.catbox.moe/e37p7l.mp4",
      "https://files.catbox.moe/wvqjg1.mp4",
      "https://files.catbox.moe/4t04vj.mp4",
      "https://files.catbox.moe/6t4wp7.mp4",
      "https://files.catbox.moe/im8atv.mp4",
      "https://files.catbox.moe/42lnoz.mp4",
      "https://files.catbox.moe/9zoqn1.mp4",
      "https://files.catbox.moe/pbqemw.mp4",
      "https://files.catbox.moe/j2yq2v.mp4",
      "https://files.catbox.moe/22od6k.mp4",
      "https://files.catbox.moe/6lwscp.mp4",
      "https://files.catbox.moe/f9g5fv.mp4",
      "https://files.catbox.moe/e50pva.mp4",
      "https://files.catbox.moe/k351o6.mp4",
      "https://files.catbox.moe/0i468x.mp4",
      "https://files.catbox.moe/3pjxjf.mp4",
      "https://files.catbox.moe/tnu26i.mp4",
      "https://files.catbox.moe/cw2imd.mp4",
      "https://files.catbox.moe/5vufsr.mp4",
      "https://files.catbox.moe/b3zrvv.mp4",
      "https://files.catbox.moe/1wkt8s.mp4",
      "https://files.catbox.moe/0rpv1i.mp4",
      "https://files.catbox.moe/yypd38.mp4",
      "https://files.catbox.moe/7124bh.mp4",
      "https://files.catbox.moe/8b9c69.mp4",
      "https://files.catbox.moe/8hhkqt.mp4",
      "https://files.catbox.moe/6tve29.mp4",
      "https://files.catbox.moe/6pb5ap.mp4",
      "https://files.catbox.moe/wv2lym.mp4",
      "https://files.catbox.moe/ca8997.mp4",
      "https://i.imgur.com/F4ZpRIN.mp4",
      "https://files.catbox.moe/w9i8je.mp4",
      "https://files.catbox.moe/y6rxig.mp4",
      "https://files.catbox.moe/dnb97s.mp4",
      "https://files.catbox.moe/6yxbke.mp4",
      "https://files.catbox.moe/wtlul3.mp4",
      "https://files.catbox.moe/7f9xi7.mp4",
      "https://files.catbox.moe/dr06pg.mp4",
      "https://files.catbox.moe/n0or7n.mp4",
      "https://files.catbox.moe/56as9n.mp4",
      "https://files.catbox.moe/i3wn40.mp4",
      "https://files.catbox.moe/raen78.mp4",
      "https://files.catbox.moe/j2bfvm.mp4",
      "https://files.catbox.moe/09znro.mp4",
      "https://files.catbox.moe/1ihpyg.mp4",
      "https://files.catbox.moe/n4weh3.mp4",
      "https://files.catbox.moe/5aqltt.mp4",
      "https://files.catbox.moe/rlvw7h.mp4",
      "https://files.catbox.moe/rmd3f9.mp4",
      "https://files.catbox.moe/ocvk3o.mp4",
      "https://files.catbox.moe/ikwd2c.mp4",
      "https://files.catbox.moe/do77ce.mp4",
      "https://files.catbox.moe/612h7p.mp4",
      "https://files.catbox.moe/bkhu9q.mp4",
      "https://files.catbox.moe/4s1u7e.mp4",
      "https://files.catbox.moe/44cfph.mp4",
      "https://files.catbox.moe/4k2vch.mp4",
      "https://files.catbox.moe/ve6dws.mp4",
      "https://files.catbox.moe/yjsuuk.mp4",
      "https://files.catbox.moe/gp3eps.mp4",
      "https://files.catbox.moe/8y7l97.mp4",
      "https://files.catbox.moe/1ndsni.mp4",
      "https://files.catbox.moe/cqq28g.mp4",
      "https://files.catbox.moe/y3iy02.mp4",
      "https://files.catbox.moe/oqawns.mp4",
      "https://files.catbox.moe/a6cdsm.mp4",
      "https://files.catbox.moe/bnbxvd.mp4",
      "https://files.catbox.moe/df85nq.mp4",
      "https://files.catbox.moe/h6q3ym.mp4",
      "https://files.catbox.moe/7c1hj0.mp4",
      "https://files.catbox.moe/x4lg4r.mp4",
      "https://files.catbox.moe/jvau6x.mp4"
    ];
    var callback = () => api.sendMessage({body:`Số video hiện có: ${link.length}`, attachment: fs.createReadStream(__dirname + "/cache/vdanin.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/vdanin.mp4"), event.messageID);  
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/vdanin.mp4")).on("close", () => callback());
  }
};

module.exports.run = async ({ api, event, args }) => {
  if (args[0] === "on") {
    isvideoanime = true;
    api.sendMessage("Tự động gửi video anime khi nhắn 'video anime, Vdanime' đã được bật.", event.threadID, event.messageID);
  } else if (args[0] === "off") {
    isvideoanime = false;
    api.sendMessage("Tự động gửi video anime khi nhắn 'video anime, Vdanime' đã được tắt.", event.threadID, event.messageID);
  } else {
    api.sendMessage("Sử dụng: /videoanime on hoặc /videoanime off", event.threadID, event.messageID);
  }
};
