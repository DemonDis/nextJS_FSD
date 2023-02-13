import { createEffect } from "effector";
import axios from "axios";

export const fetchUserFx = createEffect({
  handler: async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/comments");
  }
});
