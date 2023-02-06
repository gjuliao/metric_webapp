const GET_COUNTRIES = 'GET_COUNTRIES';
const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES: return action.payload;
    default: return state;
  }
};

export default dataReducer;

export const getCountries = () => async (dispatch) => {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    const countries = await data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  } catch (error) {
    throw new Error(error);
  }
};
