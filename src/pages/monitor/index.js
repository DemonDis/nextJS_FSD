import { useRouter } from "next/router";
import { MonitorPanel } from '@/pagesLayer'

const TeamsPage = () => {
  return
};

export const NestedLayout = ({ children }) => {
    const router = useRouter();
    return (
      <div className="m-4">
        <MonitorPanel />
        <button
          onClick={() => router.push(`/monitor/team`)}
          type="submit"
          className="group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Team
        </button>
        {children}
      </div>
    )
  }


  export const TeamsPageLayout = (page) => <NestedLayout>{page}</NestedLayout>;

TeamsPage.getLayout = TeamsPageLayout;

export default TeamsPage;
