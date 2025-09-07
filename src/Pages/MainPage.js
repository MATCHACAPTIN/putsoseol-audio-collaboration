import React from 'react';
import logo from '../img/logo.png';
import styled from 'styled-components';
import appleGreen from '../img/apple-green.png';

const MainPage = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <ImgBox>
        <img src={logo} alt="풋소설로고" style={{ width: '100%' }} />
      </ImgBox>
      <StyledText>설익은 청춘의 마음을 담은 소설레터🍏</StyledText>
    </>
  );
};

export default MainPage;

const StyledText = styled.div`
  display: flex;
  font-family: 'Batang Medium';
  padding-left: 25%;
  font-size: 13px;
`;

const ImgBox = styled.div`
  width: 280px;
  height: 160px;
  padding-left: 18%;
`;
