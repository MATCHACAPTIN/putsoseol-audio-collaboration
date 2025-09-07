import React from 'react';
import yeji from '../audio/yeji.wav';
import Contents from '../Components/Contents';
import BText from '../Components/Book/BText';
import { OtherList } from '../Components';

const SecondLetter = () => {
  return (
    <>
      <Contents
        words="끝까지 읽어주셔서 고맙습니다."
        author="허운"
        title="얼짱귀신 한풀이 대작전"
        text={<BText />}
        musicfile={yeji}
        date="38회(2024. 08. 10.)"
      />
    </>
  );
};

export default SecondLetter;
