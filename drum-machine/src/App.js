import React, { useState } from 'react';
import DrumPad from './DrumPad';
import './App.css';

const drumPads = [
  { id: 'Heater 1', keyTrigger: 'Q', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { id: 'Heater 2', keyTrigger: 'W', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { id: 'Heater 3', keyTrigger: 'E', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { id: 'Heater 4', keyTrigger: 'A', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { id: 'Clap', keyTrigger: 'S', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { id: 'Open-HH', keyTrigger: 'D', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { id: 'Kick-n\'-Hat', keyTrigger: 'Z', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { id: 'Kick', keyTrigger: 'X', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { id: 'Closed-HH', keyTrigger: 'C', audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
];

function App() {
  const [currentSound, setCurrentSound] = useState('');

  const handleDisplay = (soundName) => setCurrentSound(soundName);

  return (
    <div id="drum-machine" className="App">
      <div id="display">{currentSound}</div>
      <div className="drum-pads">
        {drumPads.map((pad) => (
          <DrumPad 
            key={pad.keyTrigger}
            id={pad.id} 
            keyTrigger={pad.keyTrigger}
            audioSrc={pad.audioSrc}
            onPlay={handleDisplay}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
