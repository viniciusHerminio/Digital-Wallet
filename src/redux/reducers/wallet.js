import { REQUEST_CURRENCY, INFOS_SELECTED, VALUE_SELECTED } from '../actions';

const INITTIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  value: 0.00,
  currency: 'BRL',
};

const walletReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCY: {
    return {
      ...state,
      currencies: action.currency,
      currencyValue: action.currencyValue,
    };
  }

  case INFOS_SELECTED: {
    return {
      ...state,
      expenses: [...state.expenses, action.infos],
    };
  }
  case VALUE_SELECTED: {
    return {
      ...state,
      value: action.value,
    };
  }
  default: return state;
  }
};

export default walletReducer;
