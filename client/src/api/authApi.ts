import axios from "axios";
import { config } from "../config";

const server = config.baseUrl;

interface IData {
  email: string;
  password: string;
}

export const signup = async (data: IData) => {
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

export const login = async (data: IData) => {
  try {
    const response = await axios({
      method: "post",
      url: server + "/users/login",
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
