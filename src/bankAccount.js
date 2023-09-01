function BankAccount(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
}
BankAccount.prototype.deposit = function (amount) {
    if (typeof amount !== 'number') {
        throw new Error('Entered deposit must be a number.');
    }
    if (amount <= 0) {
        throw new Error('Please enter the deposit amount correctly.');
    }
    if (this.balance === 0) {
        this.balance = amount;
    }
    else {
        this.balance += amount
    };
}
BankAccount.prototype.withdraw = function (amount) {
    if (typeof amount !== 'number') {
        throw new Error('Entered widthdraw must be a number.');
    }
    if (amount <= 0) {
        throw new Error('Please enter the withdraw amount correctly.');
    }
    if (amount > this.balance) {
        throw new Error(`The maximum amount you can withdraw is ${this.balance}.`);
    }
    this.balance -= amount;
}
BankAccount.prototype.getBalance = function () {
    return `${this.ownerName} you have ${this.balance} manat in your balance.`;
}
export { BankAccount };

//when applying testing, comment the export "export { BankAccount };" and uncomment the module.exports "module.exports = { BankAccount };"

// module.exports = { BankAccount };
