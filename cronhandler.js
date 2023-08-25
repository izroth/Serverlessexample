const axios = require('axios');
require('dotenv').config();

module.exports.discord = async () => {
    console.log(process.env.DISCORD_WEBHOOK);

    try {
        // Ping on Discord
        await axios.post(process.env.DISCORD_WEBHOOK, {
        
              content: "Ping from Lambda at " + new Date().toLocaleString()
        

        });

        console.log("Pinged Discord successfully");
        return {
            statusCode: 200,
            body: JSON.stringify('Pinged Discord successfully'),
        };
    } catch (error) {
        console.error("Failed to ping Discord:", error);
        return {
            statusCode: 500,
            body: JSON.stringify('Failed to ping Discord'),
        };
    }
};
