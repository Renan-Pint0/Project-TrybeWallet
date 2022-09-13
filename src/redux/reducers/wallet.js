import {
  FAILED_REQUEST,
  REMOVE_DATA,
  REQUEST_DATA,
  SAVE_DATA,
  SUBMIT_DATA,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  total: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_DATA:
    return {
      ...state,
    };
  case SAVE_DATA:
    return {
      ...state,
      currencies: action.data,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      erro: action.erro,
    };
  case SUBMIT_DATA:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.data },
      ],
      total: [...state.expenses, action.data].reduce(
        (acc, { value, currency, exchangeRates }) => {
          const total = acc + value * exchangeRates[currency].ask;
          return total;
        },
        0,
      ),
    };
  case REMOVE_DATA:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.id),
      ],
    };
  default:
    return state;
  }
};

export default walletReducer;
