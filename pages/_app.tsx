import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "@mui/material/styles";

import { QcrFavicon, qcrTheme } from "qcr-sites-shared";

import "qcr-sites-shared/lib/styles/styles.css";

const theme = qcrTheme();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QcrFavicon />
      <Head>
        <title>QCR internal homepage</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
