const initialState = {
  name: "Nikita Dovhich",
  loggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  return state;
};

export const getName = (state) => state.user.name;
