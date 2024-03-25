import Card from "../Card";
import './index.css'

const SpacialAudio = ({ className }) => {
  return (
    <Card className={`${className} spacial-audio`}>
      <img
        src="/images/spacial-audio.png"
        alt="Spacial Audio"
        className="spacial-audio-img"
      />
      <p className="spacial-audio-text">Spacial Audio</p>
    </Card>
  );
};

export default SpacialAudio;
