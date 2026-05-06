const { v0 } = require('v0-sdk');

const generateUI = async (req, res) => {
  const { prompt, projectName } = req.body;

  try {
    const chat = await v0.chats.create({
      message: prompt,
      system: 'You are an expert React developer. Generate a complete, production-ready UI.'
    });

    res.json({
      projectUrl: chat.webUrl,
      chatId: chat.id,
      projectName,
      message: 'UI generation started'
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { generateUI };