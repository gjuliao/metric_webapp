const GET_COUNTRIES = 'GET_COUNTRIES';
const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES: return state;
    default: return state;
  }
};

export default dataReducer;
