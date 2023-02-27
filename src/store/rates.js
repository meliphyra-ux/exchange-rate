const initialState = {
  amount: "25.00",
  currencyCode: "USD",
};

export const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "rates/amountChanged":
      return { ...state, amount: action.payload };
    case "rates/currencyCodeChanged":
      return { ...state, currencyCode: action.payload };
    default:
      return state;
  }
};

// Selectors

export const getAmount = (state) => state.rates.amount;

export const getCurrencyCode = (state) => state.rates.currencyCode;
