const initialState = {
    browserLang: null,
    actualLang: null
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "CHANGE_BLANG":
        return {
          ...state,
          browserLang: action.payload,
        };
      case "CHANGE_LANG":
        return {
          ...state,
          actualLang: action.payload,
        };
        break;
    }
    return newState;
  };
  
  export default reducer;