// IPC with child_process (Parent ↔️ Child communication)
// Node.js provides the child_process module to spawn child processes and communicate with them using IPC channels.
// Example: Parent-Child Communication
const {fork} = require('child_process');
// Fork a new process
const child = fork('./child.js');



// Send a message to the child process
child.send({ type: 'greeting', message: 'Hello, Child!',num:1 });

child.on('message',msg=>{
    console.log("massage from child:-", msg)
})

// ✅ Explanation:
// The parent uses fork() to create a child process.
// It sends messages using child.send() and listens for messages from the child.
// The child listens to the process.on('message') event and responds back using process.send().