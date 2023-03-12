import '@/app/index.scss';

import { useEffect } from "react";
import Link from "next/link";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("App layout mounted");
    return () => console.log("App layout unmounted");
  }, []);
  return (
    <div >
      <section>
        <Layout Component={Component} pageProps={pageProps} />
      </section>
    </div>
  );
}

const Layout = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

export default MyApp;
