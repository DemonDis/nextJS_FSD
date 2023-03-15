import { TeamsPageLayout } from "../index";

import {createStore, createApi} from 'effector'
import {useStore} from 'effector-react'

const $counter = createStore(0)

const {increment, decrement} = createApi($counter, {
  increment: (state, data)=> [state + data],
  decrement: (state, data)=> [state - data],
})

const nestLayout = (parent, child) => (page) => parent(child(page));
const TeamPage = () => {
  return 
};

const NestedLayout = ({ children }) => {
  // const { team } = router.query;
  const counter = useStore($counter)
  // const oncL = () => {
  //   increment()
  //   console.log('!!!!', store)
  // }
  return (
    <>
      <div>{counter}</div> 
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <section>{children}</section>
    </>
  );
};

const getLayout = (page) => <NestedLayout>{page}</NestedLayout>;

export const TeamPageLayout = nestLayout(TeamsPageLayout, getLayout);

TeamPage.getLayout = TeamPageLayout;

export default TeamPage;
