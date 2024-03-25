import Card from "../Card";
import "./index.css";

const Promotion = ({ className }) => {
  return (
    <Card className={`${className} promotion`}>
      <img
        src="/images/promotion.svg"
        alt="Promotion image"
        className="promotion-img"
      />
    </Card>
  );
};

export default Promotion;
