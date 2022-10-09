import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from './Files.module.scss';
import FilesList from './List/FilesList';
import AddMusic from './Add/AddMusic';

const Files: FC<{ music: File[], setMusic: Dispatch<SetStateAction<File[]>>, selected: number, setSelected: Dispatch<SetStateAction<number>> }> = ({ selected, music, setMusic, setSelected }) => {
  return (
    <section className={styles.files}>
      { music.length
        ? <FilesList selected={selected} music={music} setSelected={setSelected} />
        : <AddMusic setMusic={setMusic} />
      }
    </section>
  );
};

export default Files;
