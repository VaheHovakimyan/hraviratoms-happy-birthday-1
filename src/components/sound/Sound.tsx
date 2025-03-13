import { useState } from "react";
import { Howl } from "howler";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import './Sound.scss';

const sound = new Howl({
  src: ["/happy_birthday_sound.mp3"],
  volume: 1.0,
  loop: false,
});

const Sound = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button className="sound_div" onClick={togglePlay}>
      {isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon />}
    </button>
  );
};

export default Sound;