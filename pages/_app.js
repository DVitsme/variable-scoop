import SiteTheme from "../components/Header/index";
import "font-awesome/css/font-awesome.min.css";

export default function App({ Component, pageProps }) {
  return (
    <SiteTheme>
      <Component {...pageProps} />
    </SiteTheme>
  );
}
