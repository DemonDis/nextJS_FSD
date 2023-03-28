import { createEffect, attach } from "effector";
import { axiosInstance } from '@/shared/api/axios'

export const fetchFx = createEffect();

fetchFx.use(async ({request_type, request}) => {
  return axiosInstance(request_type, request)
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
