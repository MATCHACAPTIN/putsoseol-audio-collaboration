import { useState } from 'react';
import styled from 'styled-components';
import ListText from './ListText';

const StyledATag = styled.div`
  display: ${({ flip }) => (flip ? 'block' : 'none')};
  margin: 2px;
  font-size: 13px;
`;

const StyledOther = styled.div`
  border-bottom: 1px solid white;
  // margin-bottom: 10px;
  width: 150px;
  //   &:hover {
  //     border-bottom: 1px solid black;
  //   }
  //
`;

const OtherList = () => {
  const [flip, setFlip] = useState(false);

  const onFlipClicked = () => {
    setFlip(!flip);
  };

  return (
    <>
      <StyledOther onClick={onFlipClicked} flip={flip}>
        {' '}
        {flip ? '▾' : '▸'} 8월호 다른 글 보기
      </StyledOther>
      <StyledATag style={{ textDecoration: 'none', color: 'black' }} flip={flip}>
        {flip ? <ListText /> : 'none'}
      </StyledATag>
    </>
  );
};

export default OtherList;
