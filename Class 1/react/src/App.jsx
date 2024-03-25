import A17Pro from "./components/A17Pro";
import ActionButton from "./components/ActionButton";
import AllDayBattery from "./components/AllDayBattery";
import AlwaysOnDisplay from "./components/AlwaysOnDisplay";
import CeramicSheld from "./components/CeramicSheld";
import Colors from "./components/Colors";
import DynamicIsland from "./components/DynamicIsland";
import Gaming from "./components/Gaming";
import HighResolution from "./components/HighResolution";
import MainCamera from "./components/MainCamera";
import MainLens from "./components/MainLens";
import Portrait from "./components/Portrait";
import Promotion from "./components/Promotion";
import SpacialAudio from "./components/SpacialAudio";
import Telephoto from "./components/Telephoto";
import Titanium from "./components/Titanium";
import UsbC from "./components/UsbC";
import Wifi from "./components/Wifi";

const App = () => {
  return (
    <main className="bento">
      <MainCamera className="bento-main-camera" />
      <CeramicSheld className="bento-ceramic-sheld" />
      <MainLens className="bento-main-lens" />
      <AlwaysOnDisplay className="bento-always-on-display" />
      <AllDayBattery className="bento-all-day-battery" />
      <Telephoto className="bento-telephoto" />
      <SpacialAudio className="bento-spacial-audio" />
      <A17Pro className="bento-a17-pro" />
      <HighResolution className="bento-high-resolution" />
      <UsbC className="bento-usb-c" />
      <Colors className="bento-colors" />
      <Promotion className="bento-promotion" />
      <Gaming className="bento-gaming" />
      <ActionButton className="bento-action-button" />
      <DynamicIsland className="bento-dynamic-island" />
      <Wifi className="bento-wifi" />
      <Portrait className="bento-portrait" />
      <Titanium className="bento-titanium" />
    </main>
  );
};

export default App;
