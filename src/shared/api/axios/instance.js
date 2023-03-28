import axios from "axios";

export const axiosInstance = async (request_type, request) => {
  const url = `https://jsonplaceholder.typicode.com/${request_type}`
  try {
    const response = await axios.post(`${url}`, request);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
