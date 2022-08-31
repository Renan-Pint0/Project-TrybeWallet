import { REQUEST_DATA, SAVE_DATA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
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
  default:
    return state;
  }
};

export default walletReducer;
