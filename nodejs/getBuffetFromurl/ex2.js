const axios = require("axios");
const pdfUrl =
  "https://documents-sandbox.terotam.com/customer/708/SCA-Report/SCA-Report_1726813870705_20Sep2024120110pm565_SCA_Report.pdf";
async function getBase64FromPdfUrl1(pdfUrl) {
  try {
    const response = await axios.get(pdfUrl, { responseType: "arraybuffer" });
    const base64 = Buffer.from(response.data, "binary").toString("base64");
    console.log("Base64 String:", base64);
  } catch (error) {
    console.error("Error fetching the PDF:", error);
  }
}

getBase64FromPdfUrl1(pdfUrl);