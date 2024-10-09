// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER WITH VALIDATION
do {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx (must be greater than 0)'));

} while (isNaN(investment) || investment <= 0)

do {
    rate = parseFloat(prompt('Enter interest rate as xx.x (must be between 0 and 6)'));
} while (isNaN(rate) || rate < 0 || rate > 6)

do {
    years = parseInt(prompt('Enter the number of years you want to invest for (must be between 1 and 30)'));

} while (isNaN(years) || years < 1 || years > 30)


// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);