const annualBilling = [1500,1800,700,5000,1600,18000];

const totalBilling= annualBilling.reduce((total,currentValue) => {

return total + currentValue;
},0);
console.log("rendimentos anuais");
console.log(annualBilling);
console.log("total de rendimentos");
console.log(totalBilling);


