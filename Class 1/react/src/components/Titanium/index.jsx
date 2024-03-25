import Card from "../Card";
import './index.css';

const Titanium = ({ className }) => {
  return (
    <Card className={`${className} titanium`}>
      <img src="/images/titanium.png" alt="Titanium" className="titanium-img" />
    </Card>
  );
} 

export default Titanium;