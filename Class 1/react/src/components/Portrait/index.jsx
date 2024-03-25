import Card from "../Card";
import './index.css';

const Portrait = ({ className }) => {
  return (
    <Card className={`${className} portrait`}>
      <p className="portrait-title">Next generation portraits</p>
    </Card>
  );
}

export default Portrait;