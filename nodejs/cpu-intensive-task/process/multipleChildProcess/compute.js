function heavyComputation() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) sum += i;
    return sum;
  }
  
  process.on("message", (msg) => {
    if (msg === "start") {
      const result = heavyComputation();
      process.send(result); // Send result back
    }
  });
  