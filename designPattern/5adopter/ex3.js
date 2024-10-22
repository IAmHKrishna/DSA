// Existing PayPal payment system (incompatible interface)
class PayPal {
    constructor() {
        this.balance = 1000;
    }

    sendPayment(amount) {
        this.balance -= amount;
        console.log(`Paid $${amount} using PayPal. Remaining balance: $${this.balance}`);
    }
}

// Existing Stripe payment system (incompatible interface)
class Stripe {
    constructor() {
        this.funds = 2000;
    }

    makePayment(amount) {
        this.funds -= amount;
        console.log(`Paid $${amount} using Stripe. Remaining funds: $${this.funds}`);
    }
}

// Adapter for PayPal to make it compatible with the target interface
class PayPalAdapter {
    constructor(paypal) {
        this.paypal = paypal;
    }

    pay(amount) {
        this.paypal.sendPayment(amount); // Adapting the method to match the target interface
    }
}

// Adapter for Stripe to make it compatible with the target interface
class StripeAdapter {
    constructor(stripe) {
        this.stripe = stripe;
    }

    pay(amount) {
        this.stripe.makePayment(amount); // Adapting the method to match the target interface
    }
}

// Client code: common interface for payments
class PaymentProcessor {
    constructor(paymentSystem) {
        this.paymentSystem = paymentSystem;
    }

    processPayment(amount) {
        this.paymentSystem.pay(amount); // Using the same method regardless of the system
    }
}

// Usage:
const paypal = new PayPal();
const paypalAdapter = new PayPalAdapter(paypal);

const stripe = new Stripe();
const stripeAdapter = new StripeAdapter(stripe);

const paypalProcessor = new PaymentProcessor(paypalAdapter);
const stripeProcessor = new PaymentProcessor(stripeAdapter);

// Process payments through both systems using the unified interface
paypalProcessor.processPayment(100); // Paid $100 using PayPal
stripeProcessor.processPayment(200); // Paid $200 using Stripe
