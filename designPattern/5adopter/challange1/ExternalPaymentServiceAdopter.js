class ExternalPaymentServiceAdapter {
    constructor(externalPaymentService) {
      this.externalPaymentService = externalPaymentService;
    }
  
    createCharge({ customerId, amount, currency }) {
      const chargeId = this.externalPaymentService.createCharge(customerId, amount);
      return chargeId;
    }
  
    cancelCharge({ chargeId }) {
      this.externalPaymentService.cancelCharge(chargeId);
    }
  
    updateCharge({ chargeId, amount, currency }) {
      const newChargeId = this.externalPaymentService.updateCharge(chargeId, amount, currency);
      return newChargeId;
    }
  
    listCharges() {
      const pendingCharges = this.externalPaymentService.pendingCharges.map(charge => {
        const [amount, chargeCurrency] = charge.value.split(" ");
        return {
          chargeId: charge.chargeId,
          customerId: charge.customerId,
          amount: parseFloat(amount),
          currency: chargeCurrency,
        };
      });
  
      return pendingCharges;
    }
  }

  module.exports = ExternalPaymentServiceAdapter;