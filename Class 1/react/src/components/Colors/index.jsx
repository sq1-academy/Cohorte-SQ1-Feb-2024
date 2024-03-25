import Card from "../Card";
import './index.css';

const Colors = ({ className }) => {
  return (
    <Card className={`${className} colors`}>
      <p className="colors-title">Four Titanium Colors</p>
      <img src="/images/colors.png" alt="Four Titanium Colors" className="colors-img" />
      <div className="colors-gradient"></div>
    </Card>
  );
}

export default Colors;