import axios from "axios";

const baseUrl = "http://localhost:5000";

const login = async (obj) => {
  const url = baseUrl + `/signin`;
  return await axios.post(url, obj);
};

const signup = async (obj) => {
  const url = baseUrl + `/signup`;
  return await axios.post(url, obj);
};

export default {
  login,
  signup,
};
