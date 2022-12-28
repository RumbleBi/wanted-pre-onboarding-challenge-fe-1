import axios from "axios";

const server = "http://localhost:8080";

export const getTodos = async (data: any) => {
  try {
    const response = await axios({
      method: "post",
      url: server + "/users/create",
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
