import Card from "../Card";
import "./index.css";

const HighResolution = ({ className }) => {
  return (
    <Card className={`${className} HighResolution`}>
      <p className="HighResolution-title">Super-high-resolution photos</p>
    </Card>
  );
};

export default HighResolution;
