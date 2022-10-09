import React, { FC, useEffect, useState } from 'react';
import styles from './Time.module.scss';

const Time: FC<{ audio: HTMLAudioElement | null, selected: number }> = ({ audio, selected }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audio) {
      audio.ondurationchange = () => {
        setDuration(audio.duration);
      }

      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio?.currentTime || 0);
      });
    }
  }, [audio, selected])

  return (
    <p className={styles.time}>{currentTime ? `${Math.floor(currentTime / 60)}:${String(Math.round(currentTime % 60)).padStart(2, '0')}` : '0:00'} / {duration ? `${Math.floor(duration / 60)}:${String(Math.round(duration % 60)).padStart(2, '0')}` : '0:00'}</p>
  );
};

export default Time;
