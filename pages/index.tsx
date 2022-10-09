import React, { useState } from 'react';
import Files from '../src/components/Files/Files';
import Player from '../src/components/Player/Player';

const Index = () => {
  const [music, setMusic] = useState<File[]>([]);
  const [selected, setSelected] = useState<number>(0);
  return (
    <>
      <Player setSelected={setSelected} music={music} selected={selected} />
      <Files selected={selected} music={music} setMusic={setMusic} setSelected={setSelected} />
    </>
  );
};

export default Index;
