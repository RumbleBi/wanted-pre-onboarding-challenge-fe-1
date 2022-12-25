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

    console.log(response);
    console.log("pass");
  } catch (e) {
    console.log(e);
    console.log("error");
    return e;
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
  } catch (e) {
    console.log(e);
  }
};
