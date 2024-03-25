import Card from "../Card";
import './index.css';

const DynamicIsland = ({ className }) => {
  return (
    <Card className={`${className} island`}>
      <img src="/images/island.png" alt="Dynamic island" className="island-img" />
      <p className="island-title">Dynamic island</p>
    </Card>
  );
}

export default DynamicIsland;