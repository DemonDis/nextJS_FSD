import { MonitorPanel } from '@/pagesLayer'
import Link from "next/link";
import { useEffect } from "react";
// const MonitorPage = ({ children }) => {
//     return (
//         <div>
//             <MonitorPanel/>
//             { children }
//         </div>
//     )
// };

// export default MonitorPage;

const TeamsPage = () => {
  return <div>
            <MonitorPanel />
  </div>;
};

export const NestedLayout = ({ children }) => {
  useEffect(() => {
    console.log("TeamsPageLayout mounted");
    return () => console.log("TeamsPageLayout unmounted");
  }, []);
    return (
      <>
        <div >
      <div >
        <h2>Teams</h2>
        <nav>
          <ol>
            <li>
              <Link href="/monitor/team1">Team1</Link>
            </li>
            <li>
              <Link href="/monitor/team2">Team2</Link>
            </li>
            <li>
              <Link href="/monitor/team3">Team3</Link>
            </li>
          </ol>
        </nav>
      </div>
      {children}
    </div>
      </>
    )
  }


  export const TeamsPageLayout = (page) => <NestedLayout>{page}</NestedLayout>;

TeamsPage.getLayout = TeamsPageLayout;

export default TeamsPage;
