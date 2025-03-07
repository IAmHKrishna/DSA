const https = require('https');

function getBufferFromUrl(pdfUrl) {
    return new Promise((resolve, reject) => {
        https.get(pdfUrl, (res) => {
            const chunks = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('end', () => resolve(Buffer.concat(chunks)));
            res.on('error', (err) => reject(err));
        });
    });
}

const pdfUrl = "https://documents-sandbox.terotam.com/customer/708/SCA-Report/SCA-Report_1726813870705_20Sep2024120110pm565_SCA_Report.pdf";

getBufferFromUrl(pdfUrl).then((buffer) => {
    console.log('Buffer Array:', buffer);
}).catch((error) => {
    console.error('Error fetching the file:', error);
});
