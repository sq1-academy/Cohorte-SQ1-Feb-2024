import Card from "../Card";
import './index.css';

const Gaming = ({ className }) => {
  return (
    <Card className={`${className} gaming`}>
      <p className="gaming-title">Next-level mobile gaming</p>
    </Card>
  );
}

export default Gaming;