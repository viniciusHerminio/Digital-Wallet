import getCurrencyValue from '../../services/currencyAPI';

export const EMAIL_SELECTED = 'EMAIL_SELECTED';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const INFOS_SELECTED = 'INFOS_SELECTED';
export const VALUE_SELECTED = 'VALUE_SELECTED';

export const emailSelected = (email) => ({
  type: EMAIL_SELECTED,
  email,
});

export const requestCurrency = (currency, currencyValue) => ({
  type: REQUEST_CURRENCY,
  currency,
  currencyValue,
});

export const fetchCurrencyValue = async (dispatch) => {
  try {
    const currencyValue = await getCurrencyValue();
    const currencyAtt = currencyValue.coins.filter((cur) => cur !== 'USDT');
    await dispatch(requestCurrency(currencyAtt, currencyValue.currencyValue));
  } catch (error) {
    console.log(error);
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
