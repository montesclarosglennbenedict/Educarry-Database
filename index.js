const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

/*
app.get('/api/data', (req, res) => {
  const articulation = req.query.articulation; // Access the value of the 'articulation' query parameter

  // Use the articulation value in your logic
  // For example, you can modify the file path based on the query parameter
  const dataPath = path.join(__dirname, 'api', `data_${articulation}.json`);

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});*/


app.get('/api/AcademicYears', (req, res) => {
  // Use the articulation value in your logic
  // For example, you can modify the file path based on the query parameter
  const dataPath = path.join(__dirname, '/api/AcademicYears', `index.json`);

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
