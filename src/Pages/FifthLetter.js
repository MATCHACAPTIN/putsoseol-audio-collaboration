import React from 'react';
import yelim from '../audio/yelim.wav';
import EText from '../Components/Book/EText';
import Contents from '../Components/Contents';

const FifthLetter = () => {
  return (
    <Contents
      words="시간이 약이라는 말을 이제는 믿어요"
      author="예림"
      title="그리 운 바다"
      text={<EText />}
      musicfile={yelim}
      date="41회(2024. 08. 21.)"
      size="3900px"
    />
  );
};

export default FifthLetter;
