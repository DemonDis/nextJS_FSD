import { TeamsPageLayout } from "../index";

const nestLayout = (parent, child) => (page) => parent(child(page));
const TeamPage = () => {
  return 
};

const NestedLayout = ({ children }) => {
  // const { team } = router.query;

  return (
    <>
      TEAM
      <section>{children}</section>
    </>
  );
};

const getLayout = (page) => <NestedLayout>{page}</NestedLayout>;

export const TeamPageLayout = nestLayout(TeamsPageLayout, getLayout);

TeamPage.getLayout = TeamPageLayout;

export default TeamPage;
