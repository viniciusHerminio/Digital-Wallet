import {
  REQUEST_CURRENCY_SUCESS,
  INFOS_SELECTED,
  VALUE_SELECTED,
  REQUEST_CURRENCY,
  DELETE_ITEM,
} from '../actions';

const INITTIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  value: 0.00,
  currency: 'BRL',
  isFetching: false,
};

const walletReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCY: {
    return {
      ...state,
      isFetching: true,
    };
  }
  case REQUEST_CURRENCY_SUCESS: {
    return {
      ...state,
      currencies: action.currency,
      currencyValue: action.currencyValue,
      isFetching: false,
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
  case DELETE_ITEM: {
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  }
  default: return state;
  }
};

export default walletReducer;
