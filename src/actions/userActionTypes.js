export const Types = {
  GET_USER_REQUEST: "GET_USER_REQUEST",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
};

export const getUserRequest = () => {
  return { type: Types.GET_USER_REQUEST };
};

export const getUserSuccess = (items) => {
  return {
    type: Types.GET_USER_SUCCESS,
    payload: { items },
  };
};
