import axios from "axios";

const server = "http://localhost:8080";

export const signup = async (data: any) => {
  try {
    const response = await axios({
      method: "post",
      url: server + "/users/create",
      data: {
        email: data.email,
        password: data.password,
      },
    });
    return response;
  } catch (e: any) {
    return e.response;
  }
};

export const login = async (data: any) => {
  try {
    const response = await axios({
      method: "post",
      url: server + "/users/login",
      data: {
        email: data.email,
        password: data.password,
      },
    });
    console.log(response);
    return response;
  } catch (e: any) {
    console.log(e.response);
    return e.response;
  }
};
