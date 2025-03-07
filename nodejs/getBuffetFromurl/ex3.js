const axios = require('axios');

async function getBufferFromUrl(pdfUrl) {
    try {
        const response = await axios.get(pdfUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data);
        console.log('Buffer Array:', buffer);
    } catch (error) {
        console.error('Error fetching the file:', error);
    }
}

const pdfUrl = "https://documents-sandbox.terotam.com/customer/708/SCA-Report/SCA-Report_1726813870705_20Sep2024120110pm565_SCA_Report.pdf";
getBufferFromUrl(pdfUrl);
