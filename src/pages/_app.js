import '@/app/index.scss';

function MyApp({ Component, pageProps }) {
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
