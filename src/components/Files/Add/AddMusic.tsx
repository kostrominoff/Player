import React, { Dispatch, FC, SetStateAction, useRef } from 'react';
import styles from './AddMusic.module.scss';
import { BsPlusLg } from 'react-icons/bs';

const AddMusic: FC<{ setMusic: Dispatch<SetStateAction<File[]>> }> = ({ setMusic }) => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  return (
      <>
        <button className={styles.button} onClick={() => {
          fileInput.current?.click();
        }}>
          <div className={styles.add}>
            <BsPlusLg fontSize={28}/>
          </div>
        </button>
        <input type="file" multiple ref={fileInput} style={{display: 'none'}} onChange={(e) => {
          if (e.target.files && e.target.files.length) {
            setMusic(Array.from(e.target.files));
          }
        }}/>
      </>
  );
};

export default AddMusic;
