// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
do {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
    if (isNaN(investment) || investment < 0) {
        alert('Investment must be a positive number.');
    }
    else {
        break;
    }
} while (true);

do {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    if (isNaN(rate) || rate <= 0 || rate > 6) {
        alert('Rate must be a numeric value between 0 and 6.');
    }
    else {
        break;
    }
} while (true);

do {
    years = parseInt(prompt('Enter the number of years you want to invest for'));
    if (isNaN(years) || years <= 0 || years > 30) {
        alert('Years must be a numeric value between 0 and 30.');
    }
    else {
        break;
    }    
} while (true);


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