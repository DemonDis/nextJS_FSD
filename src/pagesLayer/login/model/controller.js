import { createEffect, attach } from "effector";
import axios from "axios";

const axiosRequest = async (request_type, request) => {
  const url = `https://jsonplaceholder.typicode.com/${request_type}`
  try {
    const response = await axios.post(`${url}`, request);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const fetchFx = createEffect();

fetchFx.use(async ({request_type, request}) => {
  return axiosRequest(request_type, request)
  // return req.json()
  // https://codesandbox.io/s/hr34q?file=/pages/post/%5Bid%5D.js:152-194
})


export const fetchPostsFx = attach({
  effect: fetchFx,
  mapParams: request => ({request, request_type: 'posts'})
})
export const fetchTodosFx = attach({
  effect: fetchFx,
  mapParams: request => ({request, request_type: 'todos'})
})
