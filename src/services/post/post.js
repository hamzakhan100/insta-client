import axios from "axios";

const baseUrl = "http://localhost:5000";

const allpost = async (jwt) => {
  const url = baseUrl + `/allpost`;
  return await axios.get(url, {
    headers: {
      Authorization: "Bearer " + jwt, 
    },
  });
};

const likePost = async (obj, obj2) => {
  const url = baseUrl + "/like";
  return await axios.put(url, obj, { headers: obj2 });
};

const unlike = async (obj, obj2) => {
  
  const url = baseUrl + "/Unlike";
  return await axios.put(url, obj, { headers: obj2 });
};

const comment = async (obj, obj2) => {
  const url = baseUrl + "/comment";
  return await axios.put(url, obj, { headers: obj2 });
};


const createpost = async (obj, obj2) => {

  const url = baseUrl + "/createpost";
  return await axios.post(url, obj, { headers: obj2 });
};



export default {
  allpost,
  likePost,
  unlike,
  comment,
  createpost,
};
