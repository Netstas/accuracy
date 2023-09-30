import axios from "axios";

export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://localhost:7195/api/AuthApi/login",
        user
      );
      console.log(response);
      dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
    } catch (error) {
      if (error.response) {
        // Nếu có phản hồi từ máy chủ, bạn có thể xử lý nó ở đây
        dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
      } else {
        // Nếu không có phản hồi từ máy chủ, xử lý lỗi mạng
        dispatch({ type: "REGISTER_FAILURE", payload: "Network error" });
      }
    }
  };
};
export const registerUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://localhost:7195/api/AuthApi/register",
        user
      );
      dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
    } catch (error) {
      if (error.response) {
        // Nếu có phản hồi từ máy chủ, bạn có thể xử lý nó ở đây
        dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
      } else {
        // Nếu không có phản hồi từ máy chủ, xử lý lỗi mạng
        dispatch({ type: "REGISTER_FAILURE", payload: "Network error" });
      }
    }
  };
};
export const Photo = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://localhost:7195/api/AuthApi/photo",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
    } catch (error) {
      // Handle errors as before
    }
  };
};
export const relationshipUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://localhost:7195/api/AuthApi/relationship",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
    } catch (error) {
      // Handle errors as before
    }
  };
};
export const getImage = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://localhost:7195/api/AuthApi/login/getimage/${id}`
      );
      dispatch({ type: "IMAGE", payload: response.data });
    } catch (error) {
      if (error.response) {
        // Nếu có phản hồi từ máy chủ, bạn có thể xử lý nó ở đây
        dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
      } else {
        // Nếu không có phản hồi từ máy chủ, xử lý lỗi mạng
        dispatch({ type: "REGISTER_FAILURE", payload: "Network error" });
      }
    }
  };
};