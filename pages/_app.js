import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

/**
 *
 * SessionProvider - allows us to keep our session state surround the app.
 *
 *
 * @param {*} param0
 * @returns
 */
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
