const fs = require("fs");
module.exports.config = {
  name: "prefix",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "John Arida", 
  description: "no prefix",
  usePrefix: true,
  commandCategory: "No command marks needed",
  usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("prefix")==0 || (event.body.indexOf("Prefix")==0 || (event.body.indexOf("Ano prefix")==0 || (event.body.indexOf("ano prefix")==0)))) {
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Manila").format("HH:mm:ss || D/MM/YYYY");
    var msg = {
        body: `﹝👾﹞ 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗺𝘆 𝗽𝗿𝗲𝗳𝗶𝘅 » ${global.config.PREFIX} \n Type ${global.config.PREFIX}𝗵𝗲𝗹𝗽 𝘁𝗼 𝘀𝗲𝗲 𝗮𝗹𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀..`
      }
      api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

      }