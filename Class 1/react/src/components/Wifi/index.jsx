import Card from "../Card";
import './index.css';

const Wifi = ({ className }) => {
  return (
    <Card className={`${className} wifi`}>
      <p className="wifi-title">Wi-Fi 6e</p>
      <img src="/images/wifi.png" alt="Wi-Fi icon" className="wifi-icon" />
      <p className="wifi-title">and Thread</p>
    </Card>
  );
}

export default Wifi;