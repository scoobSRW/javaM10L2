let bankBalance = 4987.72;

function deposit(amount) {
    bankBalance += amount;
}
function withdraw(amount) {
    if (amount > bankBalance) {
        console.log("Insufficient funds.");
    } else {
        bankBalance -= amount;
    }
}
function checkBalance() {
    console.log(`Current Balance: $${bankBalance.toFixed(2)}`);
}
deposit(987.23);
checkBalance();

withdraw(625.00);
checkBalance();
