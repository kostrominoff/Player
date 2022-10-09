import React, { Dispatch, FC, SetStateAction } from 'react';
import { IoMdMusicalNote } from 'react-icons/io';
import styles from './FilesItem.module.scss';

const FilesItem: FC<{ name: string, index: number, setSelected: Dispatch<SetStateAction<number>>, selected: number }> = ({ name, setSelected, selected, index}) => {
  return (
    <li style={{ backgroundColor: selected === index ? '#3b4252' : 'transparent' }}>
      <button className={styles.button} onClick={() => setSelected(index)}>
        <IoMdMusicalNote />
        { name.split('.mp3')[0] }
      </button>
    </li>
  );
};

export default FilesItem;
