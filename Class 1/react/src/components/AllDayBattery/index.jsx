import Card from "../Card";
import "./index.css";

const AllDayBattery = ({ className }) => {
  return (
    <Card className={`${className} all-day-battery`}>
      <img
        src="/images/battery.svg"
        alt="Battery icon"
        className="all-day-battery-icon"
      />
      <p className="gradient-text all-day-battery-title">
        All-day battery life
      </p>
    </Card>
  );
};

export default AllDayBattery;
