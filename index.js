const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const cors = require('cors');

app.get('/api/transferability/categories', (req, res) => {
  const institutionId = req.query.institutionId; // Access the value of the 'articulation' query parameter
  const academicYearId = req.query.academicYearId;
  const listType = req.query.listType;

  // Use the articulation value in your logic
  // For example, you can modify the file path based on the query parameter
  const dataPath = path.join(__dirname, 'api', 'transferability', 'categories', `${institutionId}-${academicYearId}-${listType}.json`);

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.send(data);
  });
});

app.get('/api/transferability/courses', (req, res) => {
  const institutionId = req.query.institutionId; // Access the value of the 'articulation' query parameter
  const academicYearId = req.query.academicYearId;
  const listType = req.query.listType;

  // Use the articulation value in your logic
  // For example, you can modify the file path based on the query parameter
  const dataPath = path.join(__dirname, 'api', 'transferability', 'categories', `${institutionId}-${academicYearId}-${listType}.json`);

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.send(data);
  });
});



app.get('/api/AcademicYears', (req, res) => {
  // Use the articulation value in your logic
  // For example, you can modify the file path based on the query parameter
  const dataPath = path.join(__dirname, '/api/AcademicYears', `index.json`);
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.send(data);
  });
});

app.get('/api/institutions', (req, res) => {
  // Use the articulation value in your logic
  // For example, you can modify the file path based on the query parameter
  const dataPath = path.join(__dirname, '/api/institutions', `index.json`);

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.send(data);
  });
});

app.get('/api/appsettings', (req, res) => {
  // Use the articulation value in your logic
  // For example, you can modify the file path based on the query parameter
  const dataPath = path.join(__dirname, '/api/appsettings', `index.json`);

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.send(data);
  });
});

app.get('/api/institutions/*/transferability/availableAcademicYears', (req, res) => {
  const dynamicSegment = req.params[0];
  const dataPath = path.resolve(__dirname, 'api', 'institutions', dynamicSegment, 'transferability', 'availableAcademicYears', 'index.json');

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.send(data);
  });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors({
  origin: 'https://educarry2.montesclarosglennbenedict.repl.co',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});