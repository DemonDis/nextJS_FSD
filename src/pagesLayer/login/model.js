import { sample } from "effector";
import {  $todos } from "./state";
import { fetchUserFx } from "./controller";

$todos.on(fetchUserFx.done, (_, { result }) => result.data);

sample({
  clock: fetchUserFx.done,
  fn: (state, response) => {
    const { result } = response;
    const { data } = result;

    return data[0].title;
  },
});
