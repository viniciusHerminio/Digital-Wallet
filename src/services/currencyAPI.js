const getCurrencyValue = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencyValue = await response.json();
  const coins = Object.keys(currencyValue);

  return coins;
};

export default getCurrencyValue;
