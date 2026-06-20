import { useState } from 'react';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState(25);

  const increase = () => setTemperature(prev => Math.min(prev + 5, 100));
  const decrease = () => setTemperature(prev => Math.max(prev - 5, 0));

  const intensity = temperature / 100;
  const flameHeight = 60 + intensity * 160; // min 60px → max 220px
  const flameScale = 0.6 + intensity * 0.4;  // min 0.6x → max 1.0x width
  const animSpeed = 1.8 - intensity * 1.0;

  return (
    <div className="page">
      <h1>Sưởi ấm online cho Pato 🐦</h1>

      <div className="fire-wrap">
        <div className="fire-scene">
          <div className="flame f1" style={{ height: flameHeight * 0.7, transform: `scaleX(${flameScale * 0.85})`, animationDuration: `${animSpeed * 0.9}s` }} />
          <div className="flame f2" style={{ height: flameHeight, transform: `scaleX(${flameScale})`, animationDuration: `${animSpeed}s` }} />
          <div className="flame f3" style={{ height: flameHeight * 0.8, transform: `scaleX(${flameScale * 0.9})`, animationDuration: `${animSpeed * 1.1}s` }} />
          <div className="ember-glow" style={{ opacity: 0.2 + intensity * 0.8, width: `${100 + intensity * 80}px` }} />
        </div>
        <div className="log-group">
          <div className="log" />
          <div className="log log2" />
        </div>
      </div>

      <div className="temp-label">{temperature}°C</div>

      <div className="controls">
        <button className="btn" onClick={decrease}>−</button>
        <button className="btn" onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default App;
