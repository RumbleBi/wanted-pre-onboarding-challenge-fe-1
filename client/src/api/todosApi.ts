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
  } catch (e) {
    console.log(e);
  }
};
