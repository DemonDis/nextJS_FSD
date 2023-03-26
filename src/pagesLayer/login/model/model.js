
import { $todos, $todos2 } from "./state";
import { fetchPostsFx, fetchTodosFx } from "./controller";

  $todos.on(fetchPostsFx.doneData, (_, posts) => posts)
  $todos2.on(fetchTodosFx.doneData, (_, posts) => posts)

  
  