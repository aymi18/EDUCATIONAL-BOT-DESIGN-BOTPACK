const axios = require('axios');
const fs = require('fs');

module.exports.config = {
    name: "yelai",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Jonell Magallanes",
    description: "EDUCATIONAL",
    usePrefix: false,
    commandCategory: "other",
    usages: "[question]",
    cooldowns: 10
};

module.exports.run = async function ({ api, event, args }) {
    const content = encodeURIComponent(args.join(" "));
    const apiUrl = `https://aiapiviafastapiwithimagebyjonellmagallanes.replit.app/ai?content=${content}`;

    if (!content) return api.sendMessage("Please provide your question.\n\nExample: ai what is the solar system?", event.threadID, event.messageID);

    try {
        api.sendMessage("🔍 | sandali lang beh hanap ako sagot...", event.threadID, event.messageID);

        const response = await axios.get(apiUrl);
        const { airesponse, image_url } = response.data;

        if (airesponse) {
            api.sendMessage(`${airesponse}`, event.threadID);

            if (image_url) {
                const imagePath = './image.jpg';
                const imageResponse = await axios.get(image_url, { responseType: 'arraybuffer' });
                fs.writeFileSync(imagePath, Buffer.from(imageResponse.data));

                api.sendMessage({ attachment: fs.createReadStream(imagePath) }, event.threadID, () => {
                    fs.unlinkSync(imagePath); 
                });
            }
        } else {
            api.sendMessage("An error occurred while processing your request.", event.threadID);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("di ko mahanap beh 😭, nag eerror 😭", event.threadID);
    }
};
