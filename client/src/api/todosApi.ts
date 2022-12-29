import axios from "axios";

const server = "http://localhost:8080";

export const getTodos = async (data: any) => {
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

export const getTodoById = async (data: any) => {
  try {
    const response = await axios({
      method: "get",
      url: server + `/todos/${data.id}`,
      headers: { Authorization: `Bearer ${data.accessToken}` },
    });
    console.log(response);
    return response;
  } catch (e: any) {
    console.log(e.response);
    return e.response;
  }
};

export const createTodo = async (data: any) => {
  console.log(data);
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
    console.log(response);
    return response;
  } catch (e: any) {
    console.log(e.response);
    return e.response;
  }
};

export const deleteTodo = async (data: any) => {
  try {
    const response = await axios({
      method: "delete",
      url: server + `/todos/${data.id}`,
      headers: { Authorization: `Bearer ${data.accessToken}` },
    });
    console.log(response);
    return response;
  } catch (e: any) {
    console.log(e.response);
    return e.response;
  }
};

export const updateTodo = async (data: any) => {
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
    console.log(response);
    return response;
  } catch (e: any) {
    console.log(e.response);
    return e.response;
  }
};
