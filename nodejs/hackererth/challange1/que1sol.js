const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path');
const fs = require('fs');

// Create uploads folder if not exists
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// Logger Middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] IP: ${req.ip} - ${req.method} ${req.url} ${res.statusCode} ${duration}ms`);
  });
  next();
});

// Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads'),
  filename: (req, file, cb) => cb(null, file.originalname)
});

const upload = multer({ storage });

const uploadsDB = []; // Mock "DB" array

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ statusCode: 400, message: 'No file uploaded' });
  }

  const maxFileSize = 2 * 1024 * 1024; // 2MB
  if (req.file.size > maxFileSize) {
    return res.status(400).json({ statusCode: 400, message: 'File size too large' });
  }

  const fileMeta = {
    filename: req.file.originalname,
    size: req.file.size,
    uploadedAt: new Date()
  };
  uploadsDB.push(fileMeta);

  res.json({ statusCode: 200, message: 'File uploaded', ...fileMeta });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});



// Area	            Suggestion
// Error Handling	Always send return res.status() after validation failure to stop function execution. Otherwise, Express might try sending 2 responses.
// Storage Directory	Instead of saving to ./ (root), it’s better to use a subfolder like /uploads (to keep project clean).
// JSON Parsing	You commented out express.json() — it’s fine here because multer handles multipart/form-data, but keep it enabled if expecting JSON in other routes.
// File Check	Before accessing req.file.size, ensure req.file exists (sometimes upload might fail and req.file will be undefined).