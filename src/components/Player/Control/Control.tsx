import React, { Dispatch, FC, MutableRefObject, SetStateAction, useEffect, useState } from 'react';
import { AiFillBackward, AiOutlineForward } from 'react-icons/ai';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';
import styles from './Control.module.scss';

const Control: FC<{ setSelected: Dispatch<SetStateAction<number>>, audio: HTMLAudioElement | null, musicLength: number, selected: number, nextButtonRef: MutableRefObject<HTMLButtonElement | null> }> = ({ setSelected, musicLength, audio, selected, nextButtonRef }) => {
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (audio && audio.src) {
      audio?.play();
      setIsPaused(false);
    }
  }, [selected]);

  return (
    <div className={styles.control}>
      <button disabled={musicLength === -1}><AiFillBackward onClick={() => setSelected(prev => prev - 1 >= 0 ? prev - 1 : musicLength )} fontSize={36}/></button>
      <button disabled={musicLength === -1}>
        {isPaused ? <BsFillPlayFill onClick={() => {
          audio?.play();
          setIsPaused(false);
        }} fontSize={36} /> : <BsFillPauseFill onClick={() => {
          audio?.pause();
          setIsPaused(true);
        }} fontSize={36} /> }
      </button>
      <button ref={nextButtonRef} disabled={musicLength === -1} onClick={() => setSelected(prev => prev + 1 <= musicLength ? prev + 1 : 0 )}><AiOutlineForward fontSize={36} /></button>
    </div>
  );
};

export default Control;
