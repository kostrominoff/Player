import React, { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import styles from './Player.module.scss';
import { BsVinylFill } from 'react-icons/bs';
import Progress from './Progress/Progress';
import Time from './Time/Time';
import Control from './Control/Control';
import Sound from './Sound/Sound';

const Player: FC<{ music: File[], selected: number, setSelected: Dispatch<SetStateAction<number>> }> = ({ music, selected, setSelected }) => {
  const audio = useRef<HTMLAudioElement | null>(null);
  const nextButton = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (audio.current && nextButton.current) {
      audio.current.onended = () => {
        nextButton.current?.click();
      }
    }
  }, [audio])

  return (
    <>
      <audio ref={audio} src={music[selected] ? URL.createObjectURL(music[selected]) : ''} style={{ display: 'none' }}/>
      <section className={styles.player}>
        <p className={styles.playing}>Сейчас играет</p>
        <h1>{ music[selected] ? music[selected].name.split('.mp3')[0] : '-' }</h1>
        <BsVinylFill fontSize={150} />
        <Progress selected={selected} audio={audio.current} />
        <Time audio={audio.current} selected={selected} />
        <Control nextButtonRef={nextButton} selected={selected} setSelected={setSelected} musicLength={music.length - 1} audio={audio.current} />
        <Sound audio={audio.current} />
      </section>
    </>
  );
};

export default Player;
