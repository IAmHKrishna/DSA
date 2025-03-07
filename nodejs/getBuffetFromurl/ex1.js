// import axios from "axios";
async function getBase64FromPdfUrl(pdfUrl) {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
  
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => resolve(reader.result.split(",")[1]); // Extract only Base64
        reader.onerror = (error) => reject(error);
      });
    } catch (error) {
      console.error("Error fetching the PDF:", error);
    }
  }
  
  // Example usage
  const pdfUrl =
    "https://documents-sandbox.terotam.com/customer/708/SCA-Report/SCA-Report_1726813870705_20Sep2024120110pm565_SCA_Report.pdf";
  getBase64FromPdfUrl(pdfUrl).then((base64) => {
    console.log("Base64 String:", base64);
  });