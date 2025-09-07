import React from 'react';
import youngseo from '../audio/youngseo.wav';
import CText from '../Components/Book/CText';
import Contents from '../Components/Contents';

const ThirdLetter = () => {
  return (
    <Contents
      words="슬아야, 슬. 아프지 마."
      author="영서"
      title="보통의 저녁"
      text={<CText />}
      musicfile={youngseo}
      date="39회(2024. 08. 14.)"
      size="4200px"
    />
  );
};

export default ThirdLetter;
