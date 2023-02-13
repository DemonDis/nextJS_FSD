
import { $todos } from "./state";
import { fetchUserFx } from "./controller";

$todos.on(fetchUserFx.done, (_, { result }) => result.data);