import Card from "../Card";
import './index.css';

const MainLens = ({ className }) => {
  return (
    <Card className={`${className} main-lens`}>
      <img src="/images/lens.svg" alt="Lens icon" className="main-lens-icon" />
      <p className="main-lens-desc">Main lens</p>
    </Card>
  );
};

export default MainLens;
