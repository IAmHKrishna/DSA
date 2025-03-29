// bad

// Large interface with unrelated methods
// We split the large interface into smaller, focused interfaces for each payment type.
class PaymentProcessor {
    processCreditCardPayment() {}
    processPayPalPayment() {}
    processUPIPayment() {}
}

// Credit Card Payment (Unnecessary methods forced)
class CreditCardPayment extends PaymentProcessor {
    processCreditCardPayment() {
        console.log("Processing Credit Card Payment...");
    }
    
    processPayPalPayment() {
        throw new Error("Not applicable for Credit Card Payment!");
    }

    processUPIPayment() {
        throw new Error("Not applicable for Credit Card Payment!");
    }
}

// PayPal Payment (Unnecessary methods forced)
class PayPalPayment extends PaymentProcessor {
    processCreditCardPayment() {
        throw new Error("Not applicable for PayPal Payment!");
    }

    processPayPalPayment() {
        console.log("Processing PayPal Payment...");
    }

    processUPIPayment() {
        throw new Error("Not applicable for PayPal Payment!");
    }
}

// Usage
const payment = new CreditCardPayment();
payment.processPayPalPayment();  // ❌ Throws an error (not needed)
// =========================================================

// Problems with this approach:
// ❌ Forces all payment classes to implement irrelevant methods.
// ❌ Unnecessary dependencies on unused methods.
// ❌ Poor flexibility and difficult to extend.

// good

// Separate interfaces for different payment methods


// Focused interfaces for different payment methods
// We split the large interface into smaller, focused interfaces for each payment type.
class CreditCardPaymentProcessor {
    processCreditCardPayment() {
        console.log("Processing Credit Card Payment...");
    }
}

class PayPalPaymentProcessor {
    processPayPalPayment() {
        console.log("Processing PayPal Payment...");
    }
}

class UPIPaymentProcessor {
    processUPIPayment() {
        console.log("Processing UPI Payment...");
    }
}

// Usage: Only implement what's needed
const creditCardPayment = new CreditCardPaymentProcessor();
creditCardPayment.processCreditCardPayment(); // ✅ Works perfectly

const payPalPayment = new PayPalPaymentProcessor();
payPalPayment.processPayPalPayment(); // ✅ Works perfectly
