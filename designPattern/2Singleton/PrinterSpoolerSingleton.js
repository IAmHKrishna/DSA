class PrinterSpooler {
    // Step 1: Create a static method that controls the instance
    static getInstance() {
        console.log("PrinterSpooler.getInstance() called.",PrinterSpooler.instance);
      if (!PrinterSpooler.instance) {
        PrinterSpooler.instance = new PrinterSpooler();
      }
      return PrinterSpooler.instance;
    }
  
    // Step 2: Make the constructor private to prevent creating new instances
    constructor() {
      if (PrinterSpooler.instance) {
        throw new Error("Use PrinterSpooler.getInstance() to get an instance.");
      }
      this.queue = [];
    }
  
    // Step 3: Methods for managing print jobs
    addPrintJob(job) {
      this.queue.push(job);
      console.log(`Print job added: ${job}`);
    }
  
    processPrintJob() {
      if (this.queue.length === 0) {
        console.log("No print jobs in the queue.");
      } else {
        const job = this.queue.shift();
        console.log(`Processing print job: ${job}`);
      }
    }
  }
  
  // Usage:
  
  const spooler1 = PrinterSpooler.getInstance();
  console.log(spooler1,"===",PrinterSpooler.instance);
  const spooler2 = PrinterSpooler.getInstance();
  
  spooler1.addPrintJob("Document 1");
  spooler2.addPrintJob("Document 2");
  
  spooler1.processPrintJob(); // Processing "Document 1"
  spooler2.processPrintJob(); // Processing "Document 2"
  spooler2.addPrintJob("Document 3");

  spooler2.processPrintJob(); // Processing "Document 3"
  
  // spooler1 and spooler2 are the same instance
  console.log(spooler1 === spooler2); // true
  