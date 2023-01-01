import axios from "axios";

const server = "http://localhost:8080";

interface IData {
  accessToken: string | null;
  id?: string;
  title?: string;
  content?: string;
}

export const getTodos = async (data: IData) => {
  try {
    const response = await axios({
      method: "get",
      url: server + "/todos",
      headers: { Authorization: `Bearer ${data.accessToken}` },
    });
    return response;
  } catch (e: any) {
    return e.response;
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
