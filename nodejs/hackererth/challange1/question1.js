// Coding Question 1 (30 mins)
// Build an Express.js API to Upload a File and Save Metadata
// Create an Express server with:
// POST /upload route that accepts a single file (using multer)
// Save the file name, size, and upload time in a simple array (mock database).
// Return a success response with file metadata.
// Example:
// {
//   "filename": "resume.pdf",
//   "size": "23400",
//   "uploadedAt": "2025-04-26T10:10:00.000Z",
//   "userId": 123
// }
// Constraints:
// Use Express.js and Multer
// No actual database required, just save into an array
// Validate: only allow files less than 2MB
// Return a 400 error if the file is not less than 2MB
// ========================================================

const express = require('express')
const multer = require('multer')
const app = express()

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))


// Custom Logger Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    const startTime = Date.now()
    res.on('finish', () => {
    const endTime = Date.now()
    const duration = endTime - startTime
    console.log(`[${new Date().toISOString()}] IP: ${req.ip} - ${req.method} ${req.url} ${res.statusCode} ${duration}ms`)
    })
    next()
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })


app.get('/', (req, res) => {
    res.json({
        statusCode: 200
    })
})

app.post('/upload', upload.single('file'), (req, res) => {
    console.log("============",req.file,req.body)
    const userId = req.body.userId
    console.log(userId,"userId")
    const maxFileSize =  1024 * 1024 * 2 // 2MB
    if (req.file.size > maxFileSize) {
        res.status(400).json({
            statusCode: 400,
            message: 'File size is too large'
        })
    } else {
        res.json({
            statusCode: 200,
            message: 'File uploaded successfully',
            filename: req.file.originalname,
            size: req.file.size,
            uploadedAt: new Date()
        })
    }
})



app.listen(3000, () => {
    console.log("listen on 3000")
})
