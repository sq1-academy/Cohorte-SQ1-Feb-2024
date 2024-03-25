import "./index.css";
import Card from "../Card";

const MainCamera = ({ className }) => {
  
  return (
    <Card className={`main-camera ${className}`}>
      <p className="gradient-text main-camera-title">48 MP</p>
      <div className="main-camera-img-box">
        <div className="main-camera-wp">
          <img
            className="main-camera-img"
            src="/images/main-camera.png"
            alt="Main Camera"
          />
        </div>
        <div className="main-camera-gradient"></div>
      </div>
      <p className="main-camera-desc">Main Camera</p>
    </Card>
  );
};

export default MainCamera;
