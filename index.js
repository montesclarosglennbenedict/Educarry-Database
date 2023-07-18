const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://educarry2.montesclarosglennbenedict.repl.co',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.get('/api/transferability/categories', (req, res) => {
  const institutionId = req.query.institutionId;
  const academicYearId = req.query.academicYearId;
  const listType = req.query.listType;
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
  const institutionId = req.query.institutionId;
  const academicYearId = req.query.academicYearId;
  const listType = req.query.listType;
  const dataPath = path.join(__dirname, 'api', 'transferability', 'courses', `${institutionId}-${academicYearId}-${listType}.json`);

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.send(data);
  });
});

app.get('/api/AcademicYears', (req, res) => {
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

app.get('/api/institutions/*/agreements', (req, res) => {
  const dynamicSegment = req.params[0];
  const dataPath = path.resolve(__dirname, 'api', 'institutions', dynamicSegment, 'agreements', 'index.json');

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.send(data);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
