import axios, { AxiosResponse } from "axios";
import { config } from "../config";

const server = config.baseUrl;

interface IData {
  accessToken?: string | null;
  id?: string;
  title?: string;
  content?: string;
}

export const getTodosTest = async (data: IData) => {
  try {
    await axios({
      method: "get",
      url: server + "/todos",
      headers: { Authorization: `Bearer ${data.accessToken}` },
    }).then((res) => res);
  } catch (error) {
    if (error instanceof Error) throw error;
  }
};

export const getTodos = async (data: IData) => {
  try {
    const response = await axios({
      method: "get",
      url: server + "/todos",
      headers: { Authorization: `Bearer ${data.accessToken}` },
    });
    return response;
  } catch (e: unknown | AxiosResponse<any, any>) {
    throw e;
  }
};

export const getTodoById = async (data: IData) => {
  try {
    const response = await axios({
      method: "get",
      url: server + `/todos/${data.id}`,
      headers: { Authorization: `Bearer ${data.accessToken}` },
    });

    return response;
  } catch (e: any) {
    return e.response;
  }
};

export const createTodo = async (data: IData) => {
  try {
    const response = await axios({
      method: "post",
      url: server + "/todos",
      headers: { Authorization: `Bearer ${data.accessToken}` },
      data: {
        title: data.title,
        content: data.content,
      },
    });

    return response;
  } catch (e: any) {
    return e.response;
  }
};

export const deleteTodo = async (data: IData) => {
  try {
    const response = await axios({
      method: "delete",
      url: server + `/todos/${data.id}`,
      headers: { Authorization: `Bearer ${data.accessToken}` },
    });

    return response;
  } catch (e: any) {
    return e.response;
  }
};

export const updateTodo = async (data: IData) => {
  try {
    const response = await axios({
      method: "put",
      url: server + `/todos/${data.id}`,
      headers: { Authorization: `Bearer ${data.accessToken}` },
      data: {
        title: data.title,
        content: data.content,
      },
    });

    return response;
  } catch (e: any) {
    return e.response;
  }
};
