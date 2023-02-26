import "@/styles/globals.css";
import OneSignal from "@/util/OneSignal";
import { useEffect } from "react";
import OneSignalReact from "react-onesignal";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    OneSignal();
  }, []);

  useEffect(() => {
    OneSignalReact.on("subscriptionChange", function (isSubscribed) {
      console.log("The user's subscription state is now:", isSubscribed);
    });
  }, []);

  return <Component {...pageProps} />;
}
