const fetch = require('node-fetch');

const deployToVercel = async (req, res) => {
  const { projectName, vercelToken } = req.body;

  try {
    // Step 1: Create project on Vercel
    const projectRes = await fetch('https://api.vercel.com/v9/projects', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${vercelToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: projectName, framework: 'nextjs' })
    });

    const project = await projectRes.json();
    if (project.error) return res.status(400).json({ error: project.error.message });

    res.json({ message: 'Project created on Vercel', projectId: project.id, projectName: project.name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { deployToVercel };