const { BankAccount } = require("./bankAccount");

describe('Testinig BankAccount constructor function', () => {
    const john = new BankAccount('John', 500);
    const alice = new BankAccount('Alice', 2500);
    const bob = new BankAccount('Bob', 0);
    describe('Testing the getBalance method', () => {
        test('should return the total balance correctly', () => {
            expect(bob.getBalance()).toBe('Bob you have 0 manat in your balance.');
            expect(alice.getBalance()).toBe('Alice you have 2500 manat in your balance.');
            expect(john.getBalance()).toBe('John you have 500 manat in your balance.');
        });
        describe('Testing the deposit method', () => {
            test('should return the total balance correctly after the added amount', () => {
                bob.deposit(200);
                expect(bob.getBalance()).toBe('Bob you have 200 manat in your balance.');
                alice.deposit(30);
                expect(alice.getBalance()).toBe('Alice you have 2530 manat in your balance.');
                john.deposit(100);
                expect(john.getBalance()).toBe('John you have 600 manat in your balance.');
            });
            test('should throw error if given amount is not a number', () => {
                expect(() => { bob.deposit('a'); }).toThrow();
                expect(() => { alice.deposit(null); }).toThrow();
                expect(() => { john.deposit('10'); }).toThrow();
            });
            test('should throw error if given amount is 0', () => {
                expect(() => { bob.deposit(0); }).toThrow();
                expect(() => { alice.deposit(0); }).toThrow();
                expect(() => { john.deposit(0); }).toThrow();
            });
        });
        describe('Testing the withdraw method', () => {
            test('should return the total balance correctly after the withdrawn amount', () => {
                bob.withdraw(20);
                expect(bob.getBalance()).toBe('Bob you have 180 manat in your balance.');
                alice.withdraw(1030);
                expect(alice.getBalance()).toBe('Alice you have 1500 manat in your balance.');
                john.withdraw(50);
                expect(john.getBalance()).toBe('John you have 550 manat in your balance.');
            });
            test('should throw error if given amount is not a number', () => {
                expect(() => { bob.withdraw('a'); }).toThrow();
                expect(() => { alice.withdraw(null); }).toThrow();
                expect(() => { john.withdraw('10'); }).toThrow();
            });
            test('should throw error if given amount is 0', () => {
                expect(() => { bob.withdraw(0); }).toThrow();
                expect(() => { alice.withdraw(0); }).toThrow();
                expect(() => { john.withdraw(0); }).toThrow();
            });
            test("should throw error if the money to be withdrawn is greater than the total money. ", () => {
                expect(() => { bob.withdraw(300); }).toThrow();
                expect(() => { alice.withdraw(5000); }).toThrow();
                expect(() => { john.withdraw(700); }).toThrow();
            });
        });
    });
});