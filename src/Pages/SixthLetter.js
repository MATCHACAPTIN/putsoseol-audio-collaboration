import React from 'react';
import jinhee from '../audio/jinhee.wav';
import FText from '../Components/Book/FText';
import Contents from '../Components/Contents';

const SixthLetter = () => {
  return (
    <Contents
      words="저는 여름파"
      author="진희"
      title="겨울에서 만난 여름"
      text={<FText />}
      musicfile={jinhee}
      date="42회(2024. 08. 24.)"
      size="5000px"
    />
  );
};
export default SixthLetter;
