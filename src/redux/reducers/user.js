import { EMAIL_SELECTED } from '../actions';

const INITTIAL_STATE = {
  email: '',
};

const userReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_SELECTED: {
    return {
      ...state,
      email: action.email,
    };
  }
  default:
    return state;
  }
};

export default userReducer;
