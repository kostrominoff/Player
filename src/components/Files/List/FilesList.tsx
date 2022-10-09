import React, { Dispatch, FC, SetStateAction } from 'react';
import FilesItem from '../Item/FilesItem';
import styles from './FilesList.module.scss';

const FilesList: FC<{ music: File[], setSelected: Dispatch<SetStateAction<number>>, selected: number }> = ({ music, setSelected, selected }) => {
  return (
    <ul className={styles.list}>
      {
        music.map((file, index) => <FilesItem selected={selected} key={index} index={index} name={file.name} setSelected={setSelected} />)
      }
    </ul>
  );
};

export default FilesList;
