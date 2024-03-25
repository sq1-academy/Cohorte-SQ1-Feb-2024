import Card from "../Card";
import './index.css';

const ActionButton = ({ className }) => {
  return (
    <Card className={`${className} ActionButton`}>
      <p className="ActionButton-title">Action button</p>
      <img src="/images/action-button.png" alt="Action button icon" className="ActionButton-img" />
    </Card>
  );
}

export default ActionButton;