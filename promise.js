const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 2000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("three"), 3000);
  });
  const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("four"), 4000);
  });
  const p5 = new Promise((resolve, reject) => {
    reject(new Error({ message: "five" }));
  });
  
  // Using .catch:
  
  // Promise.all([p1, p2, p3, p4, p5])
  //   .then((values) => {
  //     console.log(values);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   }).finally(() => {
    //   console.log("finally");
    // })
  
  
    // Promise.allSettled([p1, p2, p3, p4, p5])
    // .then((values) => {
    //   console.log("lsjdlfjsdf",values);
    // })
    // .catch((error) => {
    //   console.log(error);
    // }).finally(() => {
    //   console.log("finally");
    // })



  
    // Promise.race([p1, p2, p3, p4, p5])
    // .then((values) => {
    //   console.log(values);
    // })
    // .catch((error) => {
    //   console.log(error);
    // }).finally(() => {
    //   console.log("finally");
    // })


    // Promise.any([p1, p2, p3, p4, p5])
    // .then((values) => {
    //   console.log(values);
    // })
    // .catch((error) => {
    //   console.log(error);
    // }).finally(() => {
    //   console.log("finally");
    // })


    Promise.resolve([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log("SDFSDFSDF",values);
  })
  .catch((error) => {
    console.log("SDFSDFEEEE",error);
  });

    Promise.reject([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log("SDFSDFSDF",values);
  })
  .catch((error) => {
    console.log("SDFSDFEEEE",error);
  });