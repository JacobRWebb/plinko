import { AppComponent } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import Navbar from "../components/navbar";
import { GlobalContextProvider } from "../globalContext";
import "../styles/globals.css";

const App: AppComponent = ({ Component, ...pageProps }) => {
  return (
    <>
      <Head>
        <title>Header</title>
      </Head>
      <GlobalContextProvider>
        <div className="flex h-screen w-screen min-w-max flex-col overflow-hidden bg-white">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </GlobalContextProvider>
    </>
  );
};

export default App;
