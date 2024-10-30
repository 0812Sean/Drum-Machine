import React, { useEffect, useCallback } from 'react';

function DrumPad({ id, keyTrigger, audioSrc, onPlay }) {
  const playSound = useCallback(() => {
    const audio = document.getElementById(keyTrigger);
    audio.currentTime = 0; 
    audio.play(); 
    onPlay(id); 
  }, [keyTrigger, onPlay, id]); 
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === keyTrigger) playSound();
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [keyTrigger, playSound]); 
  return (
    <div id={id} className="drum-pad" onClick={playSound}>
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={audioSrc}></audio>
    </div>
  );
}

export default DrumPad;
