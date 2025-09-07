import React from 'react';
import dawon from '../audio/dawon.wav';
import DText from '../Components/Book/DText';
import Contents from '../Components/Contents';

const FourthLetter = () => {
  return (
    <Contents
      words="제 경험담은 아닙니다만,"
      author="다원"
      title="피서 선언"
      text={<DText />}
      musicfile={dawon}
      date="40회(2024. 08. 17.)"
      size="4900px"
    />
  );
};
export default FourthLetter;
