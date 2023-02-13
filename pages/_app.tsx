import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
// import "antd/dist/antd.css";
import ApolloSetting from "../src/components/commons/apollo/index";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";

function CodeCampApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default CodeCampApp;
