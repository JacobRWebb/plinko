import { AppComponent } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import { StrictMode } from "react";
import Navbar from "../components/navbar";
import { GlobalContextProvider } from "../globalContext";
import "../styles/globals.css";

const App: AppComponent = ({ Component, ...pageProps }) => {
  return (
    <>
      <Head>
        <title>Header</title>
      </Head>
      <StrictMode>
        <GlobalContextProvider>
          <div className="flex h-screen w-screen min-w-max flex-col overflow-hidden bg-gray-200">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </GlobalContextProvider>
      </StrictMode>
    </>
  );
};

export default App;
