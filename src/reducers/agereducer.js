import { AGE_DOWN, AGE_UP_ASYNC } from "../constants/actionTypes";

const initialState = {
  age: 20,
};
const agereducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case AGE_UP_ASYNC:
      return (newState.age = newState.age + action.value);
    case AGE_DOWN:
      return (newState.age = newState.age - action.value);
    default:
      return state;
  }
};
export default agereducer;
