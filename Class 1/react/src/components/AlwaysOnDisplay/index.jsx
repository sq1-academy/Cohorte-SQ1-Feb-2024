import Card from "../Card";
import './index.css';

const AlwaysOnDisplay = ({ className }) => {
  return (
    <Card className={`${className} always-on-display`}>
      <p className="gradient-text always-on-display-text">Always-On Display</p>
    </Card>
  );
}

export default AlwaysOnDisplay;