import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from "./Types";

import { userServices } from "../../services";

export function login(email, password) {
  const tag = "Auth";
  const data = {
    email: email,
    password: password,
  };
 

  return async (dispatch) => {
    try {
      const result = await userServices.login(data);

      if (result.status === 200 || result.status === 304) {
        localStorage.setItem("jwt", result.data.token);

        localStorage.setItem("user", JSON.stringify(result.data.user));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: result.data },
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: { message: result.data.Message },
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
}

