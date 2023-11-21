class Account {
    protected balance: number;

    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Saldo insufficiente");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

class SonAccount extends Account {

}

class MotherAccount extends Account {
    private interestRate: number = 0.10; 

    addInterest(): void {
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