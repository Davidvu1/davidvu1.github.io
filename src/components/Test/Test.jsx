import './Test.css';
import zenyattaSprite from '../../assets/zenyatta sprite sheet2.png';

export default function Test() {

return (
    <div className="test-container">
      <h3>Sprite Test</h3>
      <div className="zenyatta-window"
      style={{ backgroundImage: `url(${zenyattaSprite})` }}>
        {/* We use a background image in CSS, so this div is empty */}
      </div>
    </div>
  );

};