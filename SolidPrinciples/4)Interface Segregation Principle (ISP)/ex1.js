// BAD: Single interface with unnecessary methods
class AllInOnePrinter {
    print() {
      console.log("Printing");
    }
    scan() {
      console.log("Scanning");
    }
    fax() {
      console.log("Faxing");
    }
  }
  
  class SimplePrinter extends AllInOnePrinter {
    print() {
      console.log("Printing");
    }
    // This class is forced to implement methods it doesn't use
    scan() {
      throw new Error("Scan not supported");
    }
    fax() {
      throw new Error("Fax not supported");
    }
  }
  
  // GOOD: Split interfaces into specific modules
  class Printer {
    print() {
      console.log("Printing");
    }
  }
  
  class Scanner {
    scan() {
      console.log("Scanning");
    }
  }
  
  // Usage
  const printer = new Printer();
  printer.print();
  