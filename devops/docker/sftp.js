const Client = require('ssh2-sftp-client');
const sftp = new Client();

const config = {
  host: 'your.sftp.server.com',
  port: 22,
  username: 'your-username',
  password: 'your-password', // or privateKey: fs.readFileSync('path/to/private/key')
};

async function uploadFile() {
  try {
    await sftp.connect(config);
    await sftp.put('./local-file.csv', '/remote/path/on/server.csv');
    console.log('✅ File uploaded successfully');
  } catch (err) {
    console.error('❌ Upload error:', err.message);
  } finally {
    sftp.end();
  }
}

uploadFile();
// ================================================================================//

/**
 * 
To work with **SFTP in Node.js**, the most commonly used library is [`ssh2-sftp-client`](https://www.npmjs.com/package/ssh2-sftp-client), which is a simple wrapper around the lower-level `ssh2` module and provides promise-based SFTP operations.

---

### ✅ **1. Installation**

```bash
npm install ssh2-sftp-client
```

---

### ✅ **2. Basic Usage Example: Connect and Upload a File**

```javascript
const Client = require('ssh2-sftp-client');
const sftp = new Client();

async function uploadFile() {
  try {
    await sftp.connect({
      host: 'sftp.example.com',
      port: 22,
      username: 'your-username',
      password: 'your-password', // or use privateKey
      // privateKey: require('fs').readFileSync('/path/to/private/key')
    });

    const localPath = './local-file.txt';
    const remotePath = '/remote/path/remote-file.txt';

    await sftp.put(localPath, remotePath);
    console.log('File uploaded successfully.');
  } catch (err) {
    console.error('SFTP upload failed:', err);
  } finally {
    sftp.end();
  }
}

uploadFile();
```

---

### ✅ **3. Download a File**

```javascript
await sftp.get('/remote/path/file.txt', './local/path/file.txt');
```

---

### ✅ **4. List Directory**

```javascript
const fileList = await sftp.list('/remote/path/');
console.log(fileList);
```

---

### ✅ **5. Delete or Rename Files**

```javascript
await sftp.delete('/remote/path/file-to-delete.txt');
await sftp.rename('/remote/path/old.txt', '/remote/path/new.txt');
```

---

### ✅ **6. Handling Key-Based Authentication**

```javascript
await sftp.connect({
  host: 'sftp.example.com',
  port: 22,
  username: 'your-username',
  privateKey: require('fs').readFileSync('/path/to/private/key'),
  passphrase: 'your-key-passphrase', // if required
});
```

---

Would you like an example with folder uploads, stream handling, or integration into a backend API (e.g., Express.js)?

 */