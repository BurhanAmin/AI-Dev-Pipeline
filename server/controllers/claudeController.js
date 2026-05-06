require('dotenv').config();
const Anthropic = require('@anthropic-ai/sdk');

const translatePrompt = async (req, res) => {
  const { userInput } = req.body;

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: `You are an expert at converting plain English app descriptions into structured, detailed prompts for v0 (an AI UI generator).

When given a description, you must return a JSON object with exactly two fields:
1. "lovablePrompt": A detailed, structured prompt specifying pages, components, layout, navigation, and interaction states. Be explicit and unambiguous.
2. "summary": A single plain English sentence summarising what will be built.

Return only valid JSON, no extra text.`,
      messages: [{ role: 'user', content: userInput }]
    });

    const result = JSON.parse(response.content[0].text);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { translatePrompt };