import Card from "../Card";
import "./index.css";

const CeramicSheld = ({ className }) => {
  return (
    <Card className={`${className} ceramic-shield`}>
      <p className="gradient-text ceramic-shield-title">Ceramic Shield</p>
      <img
        src="/images/shield-light.png"
        alt="Ceramic Shield"
        className="ceramic-shield-light"
      />
    </Card>
  );
};

export default CeramicSheld;