const get_interest_factor = (years: number, monthly_interest_rate: number) => {
  var factor = 0;
  var base_rate = 1 + monthly_interest_rate;
  var denominator = base_rate;
  for (var i = 0; i < years * 12; i++) {
    factor += 1 / denominator;
    denominator *= base_rate;
  }
  return factor;
};

export const mortgageCalculator = (years: number = 30, price: number = 300000, down: number = 20, rate: number = 4, tax: number = 2000) => {
  var hinsurance = 0;

  var month_term = years * 12;
  var down_payment = price * (down / 100);
  var annual_interest_rate = rate / 100;
  var monthly_interest_rate = annual_interest_rate / 12;
  var financing_price = price - down_payment;
  var monthly_factor = get_interest_factor(years, monthly_interest_rate);
  var monthly_payment = financing_price / monthly_factor;

  //private morgage insurance
  var pmi_per_month = 0;

  if (down < 20) {
    pmi_per_month = 55 * (financing_price / 100000);
  }

  //home owner's insurance
  var residential_monthly_tax = 0;
  if (tax) {
    residential_monthly_tax = tax / 12;
  } else {
    var assessed_price = price * 0.85;
    var residential_yearly_tax = (assessed_price / 1000) * 9;
    residential_monthly_tax = residential_yearly_tax / 12;
  }

  var total_payment = monthly_payment + residential_monthly_tax + pmi_per_month;

  if (total_payment > 0) {
    var monthlyPaymentPerc = Math.floor(
      (monthly_payment * 100) / total_payment
    );
    var taxPerc = Math.floor((residential_monthly_tax * 100) / total_payment);
  }
  return {
    total: total_payment,
    principle: monthly_payment,
    taxes: residential_monthly_tax,
    pmi: pmi_per_month,
    chartData: [
      { value: monthly_payment, svg: { fill: '#5386E4' }, key: 3 },
      { value: residential_monthly_tax, svg: { fill: '#BDCCE5' }, key: 2 },
      { value: pmi_per_month, svg: { fill: '#C3C3C3' }, key: 1 }
    ]
  };
};