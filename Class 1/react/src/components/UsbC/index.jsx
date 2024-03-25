import Card from "../Card";
import './index.css';

const UsbC = ({ className }) => {
  return (
    <Card className={`${className} UsbC`}>
      <p className="UsbC-title">USB-C</p>
      <img src="/images/usbc.svg" alt="usb C icon" className="UsbC-icon" />
      <p className="UsbC-title">with USB 3</p>
    </Card>
  );
}

export default UsbC;