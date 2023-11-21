"use strict";
class Account {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Saldo insufficiente");
        }
    }
    getBalance() {
        return this.balance;
    }
}
class SonAccount extends Account {
}
class MotherAccount extends Account {
    constructor() {
        super(...arguments);
        this.interestRate = 0.10;
    }
    addInterest() {
        this.balance += this.balance * this.interestRate;
    }
}
const sonAccount = new SonAccount();
const motherAccount = new MotherAccount();
sonAccount.deposit(100);
sonAccount.withdraw(50);
motherAccount.deposit(200);
motherAccount.addInterest();
console.log("Saldo SonAccount: " + sonAccount.getBalance());
console.log("Saldo MotherAccount: " + motherAccount.getBalance());
