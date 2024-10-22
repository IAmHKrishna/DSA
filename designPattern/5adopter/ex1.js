// Existing PayPal integration
class PayPal {
    constructor() {
        this.amount = 0;
    }

    setPayment(amount) {
        this.amount = amount;
        console.log(`PayPal payment set to ${amount}`);
    }

    makePayment() {
        console.log(`PayPal payment of ${this.amount} processed.`);
    }
}

// New Stripe API that has a different method to process payment
class Stripe {
    constructor() {
        this.amount = 0;
    }

    sendPayment(amount) {
        this.amount = amount;
        console.log(`Stripe payment of ${this.amount} processed.`);
    }
}

// Adapter to make Stripe compatible with existing PayPal code
class StripeAdapter {
    constructor(stripeInstance) {
        this.stripe = stripeInstance;
    }

    setPayment(amount) {
        // Adapt the method from Stripe to work with the existing interface
        this.stripe.sendPayment(amount);
    }

    makePayment() {
        console.log("lllllll")
        // Stripe does not have a separate method for making payment,
        // so this method is not needed.
        // In some cases, you might need to map or change more methods.
    }
}

// Client code that uses PayPal
function processPayment(paymentProcessor, amount) {
    paymentProcessor.setPayment(amount);
    paymentProcessor.makePayment();
}

// Using PayPal
const paypal = new PayPal();
processPayment(paypal, 100); // Output: PayPal payment set to 100, PayPal payment of 100 processed.

// Using
const stripe = new Stripe();
const stripeAdapter = new StripeAdapter(stripe);
processPayment(stripeAdapter, 200); // Output: Stripe payment of 200 processed.
