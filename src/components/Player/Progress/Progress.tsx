import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Progress.module.scss';

const Progress: FC<{ audio: HTMLAudioElement | null, selected: number }> = ({ audio, selected }) => {
  const [audioProgress, setAudioProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (audio) {
      audio.addEventListener('timeupdate', () => {
        setAudioProgress(audio.currentTime / audio.duration * 100 * 3.2);
      });
    }
  }, [audio, selected]);

  return (
    <div className={styles.bar} ref={progressRef} onClick={(e) => {
      const clickX = e.nativeEvent.offsetX;
      const width = e.currentTarget.clientWidth;
      if (audio) {
        audio.currentTime = clickX / width * audio.duration;
        setAudioProgress(audio.currentTime / audio.duration * 100 * 3.2);
      }
    }}>
      <div className={styles.progress} style={{ width: audioProgress || 0}}></div>
    </div>
  );
};

export default Progress;
