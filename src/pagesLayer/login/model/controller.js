import { createEffect } from "effector";
import axios from "axios";

export const fetchUserFx = createEffect()

fetchUserFx.use(async ({request_type, request}) => {
  const url = `https://jsonplaceholder.typicode.com/${request_type}`
  const req = await axios.post(`${url}`, request)
  .then(function (response) {
    console.log(response);
    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
  // return req.json()
  // https://codesandbox.io/s/hr34q?file=/pages/post/%5Bid%5D.js:152-194
  return req
})
