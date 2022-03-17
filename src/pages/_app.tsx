import { AppComponent } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import "../styles/globals.css";

const App: AppComponent = ({ Component, ...pageProps }) => {
  return (
    <>
      <Head>
        <title>Header</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
