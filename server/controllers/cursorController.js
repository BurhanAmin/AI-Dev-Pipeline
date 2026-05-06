const generateCursorHandoff = async (req, res) => {
  const { projectName, userInput, lovableOutput } = req.body;

  const handoffPrompt = `
# Cursor Handoff — ${projectName}

## Original User Request
${userInput}

## What Lovable Already Built
${lovableOutput}

## Your Job
Build all functionality on top of the existing UI:
- Wire up all buttons, forms, and interactions
- Connect frontend to Supabase for all data operations
- Handle loading states, error states, and edge cases
- Implement any business logic not covered by the UI

Do not redesign or restructure the existing UI. Only add functionality.
  `;

  res.json({ handoffPrompt, projectName });
};

module.exports = { generateCursorHandoff };