// Import the ExternalPaymentServiceAdopter class
const ExternalPaymentServiceAdopter = require('./ExternalPaymentServiceAdopter');

// Assume ExternalPaymentService class is defined with required methods and properties
class ExternalPaymentService {
  constructor(chargeCurrency) {
    this.chargeCurrency = chargeCurrency;
    this.pendingCharges = [];
  }

  createCharge(customerId, amount) {
    const chargeId = "someGeneratedId"; // Assume some logic to generate chargeId
    this.pendingCharges.push({
      chargeId,
      customerId,
      value: `${amount} ${this.chargeCurrency}`,
    });
    return chargeId;
  }

  cancelCharge(chargeId) {
    this.pendingCharges = this.pendingCharges.filter(charge => charge.chargeId !== chargeId);
  }

  updateCharge(chargeId, amount, currency) {
    // Assume some logic to update charge, and return a new chargeId
    this.pendingCharges= this.pendingCharges.map(mItem => {
      if (mItem.chargeId === chargeId) {
        return {
          ...mItem,
          chargeId,
          value: `${amount} ${currency}`,
        }
      }
    })
    
    return chargeId;
  }
}

// Usage example
const external = new ExternalPaymentService("USD");
const paymentService = new ExternalPaymentServiceAdopter(external);

const chargeId = paymentService.createCharge({
  customerId: "someId",
  amount: 20,
  currency: "USD"
});

console.log(chargeId, "lsdkjfl"); // Should print the generated chargeId

paymentService.updateCharge({
  chargeId,
  amount: 30.99,
  currency: "EUR"
});

const charges = paymentService.listCharges();
console.log(charges, "krishna");
// Should print: [{ chargeId: "someId", customerId: "someId", amount: 30.99, currency: "EUR"}]

paymentService.cancelCharge({ chargeId });

const updatedCharges = paymentService.listCharges();
console.log(updatedCharges, "222");
// Should print an empty array since the charge was cancelled

// external.pendingCharges should reflect the same changes as above
console.log(external.pendingCharges, "333");
// Should print: [] since the charge was cancelled
