function BankAccount(owner, initialBalance) {
    let balance = initialBalance; // Private variable

    // Public method to deposit money
    function deposit(amount) {
        if (amount > 0) {
            balance += amount;
            console.log(`${owner} deposited $${amount}. New balance: $${balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    // Public method to withdraw money
    function withdraw(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            console.log(`${owner} withdrew $${amount}. New balance: $${balance}`);
        } else {
            console.log('Withdrawal amount is invalid or exceeds balance.');
        }
    }

    // Public method to check balance
    function getBalance() {
        console.log(`${owner}'s current balance: $${balance}`);
        return balance;
    }

    // Expose public methods
    return {
        deposit,
        withdraw,
        getBalance
    };
}

// Using the BankAccount abstraction
const aliceAccount = BankAccount('Alice', 1000);
aliceAccount.getBalance();    // Alice's current balance: $1000
aliceAccount.deposit(500);    // Alice deposited $500. New balance: $1500
aliceAccount.withdraw(200);   // Alice withdrew $200. New balance: $1300
aliceAccount.withdraw(1500);  // Withdrawal amount is invalid or exceeds balance.

// Attempting to access the private balance variable directly (undefined)
console.log(aliceAccount.balance); // undefined
