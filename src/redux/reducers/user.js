const INNITIAL_STATE = {
  email: '',
};

const user = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD-EMAIL':
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
