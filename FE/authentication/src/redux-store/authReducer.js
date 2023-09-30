// authReducer.js

const initialState = {
  isLoading: false,
  successMessage: null,
  errorMessage: null,
  successUserId: null,
  image: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return { ...state, isLoading: true };

    case "REGISTER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        successUserId: action.payload.userId,
        successStatus: action.payload.status,
        errorMessage: null,
      };

    case "REGISTER_FAILURE":
      return {
        ...state,
        isLoading: false,
        successMessage: null,
        errorMessage: action.payload,
      };
    case "IMAGE":
      return {
        ...state,
        isLoading: false,
        image: null,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
