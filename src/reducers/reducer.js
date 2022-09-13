import { Types } from "../actions/userActionTypes";
const initialState = {
  items: [],
};
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
      };

    default:
      return state;
  }
};
