import Card from "../Card";
import './index.css';

const A17Pro = ({ className }) => {
  return (
    <Card className={`${className} a17-pro`}>
      <img src="/images/a17pro.png" alt="A17Pro" className="a17-pro-img" />
    </Card>
  );
} 

export default A17Pro;