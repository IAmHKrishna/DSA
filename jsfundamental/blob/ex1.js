// 🔍 What Is a Blob?
// A Blob (Binary Large Object) represents raw immutable data —
//  like files, text, images, etc.

// You might see this when you fetch a file or convert text into a Blob:


const blob1 = new Blob(['Hello']);
console.log(blob1); 
// Blob { size: 5, type: '' }
// 📦 Common Use Cases
// ✅ 1. Download a Blob as a File
// If you're trying to let the user download this blob:


const blob = new Blob(['Hello'], { type: 'text/plain' });
const url = URL.createObjectURL(blob);

const a = document.createElement('a');
a.href = url;
a.download = 'greeting.txt';
a.click();

URL.revokeObjectURL(url); // Free memory
// ✅ 2. Convert Blob to Text

blob.text().then((text) => {
  console.log(text); // "Hello"
});
// ✅ 3. Convert Blob to Base64

const reader = new FileReader();
reader.onloadend = () => {
  console.log(reader.result); // base64 string
};
reader.readAsDataURL(blob);


// 🧠 If you’re getting this from an API or response
// Make sure you’re parsing it properly:


fetch('/api/file')
  .then((res) => res.blob())
  .then((blob) => {
    console.log(blob);
    // do something like download, preview, or convert
  });




