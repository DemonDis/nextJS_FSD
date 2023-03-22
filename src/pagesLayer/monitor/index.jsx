import React from "react";
import { useRouter } from 'next/router';
import { Right, Left} from '@/widgets'

const MonitorPanel = () => {
    const router = useRouter();

    return (
        <div>
          
            <div className="flex">
              MonitorPanel
                <button
                  onClick={() => router.push('/login')}
                  type="submit"
                  className="m-2 group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  EXIT
                </button>
            </div>

              <div class="grid grid-flow-col gap-2">
                <div class="row-span-1 bg-sky-500 p-4 h-screen">
                  <Left/>
                </div>
                <div class="col-span-1 bg-cyan-500 p-4">
                  <Right/>
                </div>
              </div>
        </div>
    )
};

export default MonitorPanel;