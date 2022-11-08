import getCurrencyValue from '../../services/currencyAPI';

export const EMAIL_SELECTED = 'EMAIL_SELECTED';
export const REQUEST_CURRENCY_SUCESS = 'REQUEST_CURRENCY_SUCESS';
export const INFOS_SELECTED = 'INFOS_SELECTED';
export const VALUE_SELECTED = 'VALUE_SELECTED';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';

export const emailSelected = (email) => ({
  type: EMAIL_SELECTED,
  email,
});

export const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

export const requestCurrencySucess = (currency, currencyValue) => ({
  type: REQUEST_CURRENCY_SUCESS,
  currency,
  currencyValue,
});

export const fetchCurrencyValue = async (dispatch) => {
  try {
    dispatch(requestCurrency());
    const currencyValue = await getCurrencyValue();
    const currencyAtt = currencyValue.coins.filter((cur) => cur !== 'USDT');
    await dispatch(requestCurrencySucess(currencyAtt, currencyValue.currencyValue));
  } catch (error) {
    return error;
  }
};

export const actionFetchCurrencyValue = () => fetchCurrencyValue;

export const infosSelected = (infos) => ({
  type: INFOS_SELECTED,
  infos,
});

export const valueSelected = (value) => ({
  type: VALUE_SELECTED,
  value,
});
