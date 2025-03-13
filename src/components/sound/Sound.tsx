import { FC, useEffect, useState } from "react";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import './Sound.scss';


const Sound: FC = () => {
  const [isPlay, setPlay] = useState<boolean | null>(true);
  const [audio] = useState(new Audio("/happy_birthday_sound.mp3"));

  const togglePLay = () => {
    if (isPlay) {
      audio.play();
    } else {
      audio.pause();
    }
    setPlay(!isPlay);
  }

  useEffect((): void => {
    if(!isPlay){
      audio.play();
    }
  }, [audio]);

  return (
    <div className="sound_div" onClick={togglePLay}>
      {!isPlay ? <VolumeUpIcon /> : <VolumeOffIcon />}
    </div>
  );
}

export default Sound;