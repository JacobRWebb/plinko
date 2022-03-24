import { AppComponent } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import "../styles/globals.css";

const App: AppComponent = ({ Component, ...pageProps }) => {
  return (
    <>
      <Head>
        <title>Header</title>
      </Head>
      <div className="flex flex-col w-screen h-screen overflow-hidden bg-white">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
