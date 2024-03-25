import Card from "../Card";
import "./index.css";

const Telephoto = ({ className }) => {
  return (
    <Card className={`${className} telephoto`}>
      <p className="telephoto-title gradient-text">5x</p>
      <p className="telephoto-text">Telephoto on Pro Max</p>
    </Card>
  );
};

export default Telephoto;
