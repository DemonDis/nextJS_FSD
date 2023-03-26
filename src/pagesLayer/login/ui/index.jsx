import React, {useEffect} from "react";
import { useRouter } from 'next/router';

import { useStore } from "effector-react";
import { $todos, $todos2, fetchTodosFx, fetchPostsFx } from "../model";

export const LoginPanel = () => {
  const router = useRouter();
  const todos = useStore($todos);
  const todos2 = useStore($todos2);

  const request = {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
  const request2 = {
    userId: 1,
    title: "Fix my bugs",
    completed: false
  }

  const test = () => {
    console.log('TEST STORE', todos, todos2)
  }

  useEffect(() => {
    fetchTodosFx(request)
    fetchPostsFx(request2)
  }, []);

    return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
              <button onClick={() => test()}>TEST</button>
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <SelectInput
                todos={[todos]}
              />
              <SelectInput
                todos={[todos2]}
              />
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                onClick={() => router.push('/monitor')}
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                ВХОД
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    )
};

const SelectInput = ({todos}) => {
  return (
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <select 
          className={'relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'}
          name={'name'}
          id={'id'}
        >
          {
              todos.map((item, index) => {
                  return <option key={index} value={index}>{item.id}</option>
              })
          }
        </select>
      </div>
  )
}