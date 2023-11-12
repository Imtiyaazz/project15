export const greetingReducer = (
  state = { greet: "Good Morning", fruits: "Apple" },
  action
) => {
  switch (action.type) {
    case "GREETING":
      return {
        ...state,
        greet: action.payload,
      };
    case "ADDFRUIT":
  }
  return {
    ...state,
    fruits: action.payload,
  };
  return state;
};
