import { SET_DATA } from '../actions/dataActions';

const initialState = {
  data: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
