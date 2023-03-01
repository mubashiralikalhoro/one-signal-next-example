import "@/styles/globals.css";
import useOneSignal from "@/util/useOneSignal";

export default function App({ Component, pageProps }) {
  useOneSignal();
  return <Component {...pageProps} />;
}
