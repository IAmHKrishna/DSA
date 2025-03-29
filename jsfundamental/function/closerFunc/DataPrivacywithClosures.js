function bankAccount(initialBalance) {
    let balance = initialBalance;  // Private variable
  
    return {
      deposit: function(amount) {
        balance += amount;
        console.log(`Deposited: $${amount}. Balance: $${balance}`);
      },
      withdraw: function(amount) {
        if (amount <= balance) {
          balance -= amount;
          console.log(`Withdrew: $${amount}. Balance: $${balance}`);
        } else {
          console.log(`Insufficient funds!`);
        }
      },
      checkBalance: function() {
        console.log(`Balance: $${balance}`);
      }
    };
  }
  
  const myAccount = bankAccount(1000);
  myAccount.deposit(500);       // Deposited: $500. Balance: $1500
  myAccount.withdraw(300);      // Withdrew: $300. Balance: $1200
  myAccount.checkBalance();     // Balance: $1200
  