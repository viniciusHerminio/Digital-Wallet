import getCurrencyValue from '../../services/currencyAPI';

export const EMAIL_SELECTED = 'EMAIL_SELECTED';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';

export const emailSelected = (email) => ({
  type: EMAIL_SELECTED,
  email,
});

export const requestCurrency = (currency) => ({
  type: REQUEST_CURRENCY,
  currency,
});

export const fetchCurrencyValue = async (dispatch) => {
  try {
    const currencyValue = await getCurrencyValue();
    dispatch(requestCurrency(currencyValue));
  } catch (error) {
    console.log(error);
  }
};

export const actionFetchCurrencyValue = () => fetchCurrencyValue;
