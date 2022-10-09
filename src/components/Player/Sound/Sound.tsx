import React, { FC, useEffect, useRef, useState } from 'react';
import { AiFillSound } from 'react-icons/ai';
import styles from './Sound.module.scss';

const Sound: FC<{ audio: HTMLAudioElement | null }> = ({ audio }) => {
  const [volume, setVolume] = useState<number>(50);
  const volumeRange = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (audio) {
      audio.volume = volume / 100;
    }
  }, [volume]);

  return (
    <div className={styles.layout}>
      <button className={styles.mute} onClick={() => {
        if (volumeRange.current) {
          volumeRange.current!.value = '0';
          setVolume(0);
        }
      }}>
        <AiFillSound fontSize={24} />
      </button>
      <input ref={volumeRange} type="range" className={styles.range} value={volume} max={100} min={0} onChange={(e) => {
        setVolume(Number(e.target.value));
      }}/>
      <p>{volume}%</p>
    </div>
  );
};

export default Sound;
