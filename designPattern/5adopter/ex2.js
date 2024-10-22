// PayPal class with its own method
class PayPal {
    constructor() {
      this.name = "PayPal";
    }
  
    sendPayment(amount) {
      console.log(`Paying ${amount} using PayPal.`);
    }
  }
  
  // Stripe class with its own method
  class Stripe {
    constructor() {
      this.name = "Stripe";
    }
  
    makePayment(amount) {
      console.log(`Paying ${amount} using Stripe.`);
    }
  }
  
  // Adapter for Stripe to work with the unified interface
  class StripeAdapter {
    constructor(stripe) {
      this.stripe = stripe;
    }
  
    sendPayment(amount) {
      // Convert the method to match the PayPal interface
      this.stripe.makePayment(amount);
    }
  }
  
  // Client code
  function processPayment(paymentProvider, amount) {
    paymentProvider.sendPayment(amount);
  }
  
  // Usage:
  const paypal = new PayPal();
  const stripe = new Stripe();
  const stripeAdapter = new StripeAdapter(stripe);
  
  // Now both PayPal and Stripe (through the adapter) use the same method 'sendPayment'
  processPayment(paypal, 100); // Paying 100 using PayPal.
  processPayment(stripeAdapter, 200); // Paying 200 using Stripe.
  