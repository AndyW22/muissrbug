import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return <Component {...pageProps} key={router.asPath} />;
}

export default MyApp;
