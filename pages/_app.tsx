import type { AppProps, AppContext } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

// App.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default App;
