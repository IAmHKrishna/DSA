const fs = require('fs/promises');

async function readFileAsync() {
  console.log('🟢 Start async/await read...');
  try {
    const data = await fs.readFile('./text.txt', 'utf8');
    console.log('📄 File content:', data);
  } catch (err) {
    console.error('❌ Error:', err);
  }
  console.log('✅ File read done.');
}

readFileAsync();

console.log('🚀 After async call (non-blocking)');

// Output:
// 🟢 Start async/await read...
// 🚀 After async call (non-blocking)
// ✅ File read done.
// 📄 File content: Hello, world!

// await pauses only within the function — but not the rest of the program.