import React from "react";
import { useRouter } from 'next/router';

const MonitorPanel = () => {
    const router = useRouter();

    return (
        <div className="m-2">
            MonitorPanel
            <button
                onClick={() => router.push('/login')}
                type="submit"
                className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                EXIT
              </button>
        </div>
    )
};

export default MonitorPanel;