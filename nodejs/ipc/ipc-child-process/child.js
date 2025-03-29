
process.on('message',msg=>{
    console.log("message from parent:-",msg)

     // Respond back to the parent
  process.send({ type: 'response', message: 'Hello, Parent!' });
})