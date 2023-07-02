const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/articulation_agreements/:id', (req, res) => {
  const folderPath = './articulation_agreements';
  const fileId = req.params.id;
  const filePath = path.join(folderPath, `${fileId}.json`);

  sendFile(res, filePath);
});

app.get('/database_settings/:id', (req, res) => {
  const folderPath = './database_settings';
  const fileId = req.params.id;
  const filePath = path.join(folderPath, `${fileId}.json`);

  sendFile(res, filePath);
});

app.get('/transferability_lists/:type/:id', (req, res) => {
  const folderPath = `./transferability_lists/${req.params.type}`;
  const fileId = req.params.id;
  const filePath = path.join(folderPath, `${fileId}.json`);

  sendFile(res, filePath);
});

function sendFile(res, filePath) {
  if (fs.existsSync(filePath)) {
    res.sendFile(path.resolve(filePath));
  } else {
    res.status(404).json({ error: 'File not found' });
  }
}

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
