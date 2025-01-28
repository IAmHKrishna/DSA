// BAD: Modifying the existing code for new functionality
class Discount {
    calculate(price, type) {
      if (type === "seasonal") {
        return price * 0.9;
      } else if (type === "clearance") {
        return price * 0.5;
      }
      return price;
    }
  }
  
  // GOOD: Use extension instead of modification
  class Discount {
    calculate(price) {
      return price;
    }
  }
  
  class SeasonalDiscount extends Discount {
    calculate(price) {
      return price * 0.9;
    }
  }
  
  class ClearanceDiscount extends Discount {
    calculate(price) {
      return price * 0.5;
    }
  }
  
  // Usage
  const discount = new SeasonalDiscount();
  console.log(discount.calculate(100)); // 90
  