import OneSignalReact from "react-onesignal";

export default async function OneSignal() {
  const initOptions = {
    appId: "b2f7f966-d8cc-11e4-bed1-df8f05be55ba",
    allowLocalhostAsSecureOrigin: true,
    autoRegister: true,
    notifyButton: {
      enable: true,
    },
  };

  await OneSignalReact.init(initOptions);
  OneSignalReact.showSlidedownPrompt();

  return null;
}
