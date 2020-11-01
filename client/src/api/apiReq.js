import axios from "axios";

export const SignupApiCall = async (data) => {
  let responseData = null;
  console.log(data);
  await axios
    .post("/api/v1/signup", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      responseData = res.data;
    })
    .catch((e) => {
      responseData = e;
    });
  return responseData;
};

export const loginApiCall = async (data) => {
  console.log("in login");
  let responseData = null;
  await axios
    .post("/api/v1/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      responseData = res.data;
    })
    .catch((e) => {
      responseData = e;
    });
  return responseData;
};

export const getUserData = async () => {
  let responseData = null;
  await axios
    .get("/api/v1/getprofile", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      responseData = res.data;
    })
    .catch((e) => {
      responseData = e;
    });
  return responseData;
};
