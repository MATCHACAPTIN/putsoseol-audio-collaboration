import styled from 'styled-components';
import logo from '../img/logo.png';
import appleGreen from '../img/apple-green.png';
import ReactAudioPlayer from 'react-audio-player';
import OtherList from './OtherList';

const Contents = ({ date, title, author, text, musicfile, words, size }) => {
  return (
    <>
      <TotalBox>
        <OutsideBox size={size}></OutsideBox>
        <InsideBox>
          <DateText>{date}</DateText>
          <LogoSectionBox>
            <LogoSideBox>
              <AppleImgBox>
                <img src={appleGreen} alt="listeningApple" style={{ width: '100%' }} />
              </AppleImgBox>
            </LogoSideBox>
            <ImgBox>
              <img style={{ width: '100%', height: '' }} src={logo} alt="logo" />
            </ImgBox>
            <LogoSideBox></LogoSideBox>
          </LogoSectionBox>

          <ContentBox>
            <StyledAudio>
              <ReactAudioPlayer src={musicfile} controls />
            </StyledAudio>
            <MusicText>
              Music by 5239{' '}
              <a href="https://www.youtube.com/@gwhyuk" style={{ color: 'black', textDecoration: 'none' }}>
                ( https://www.youtube.com/@gwhyuk ) <br />
              </a>
            </MusicText>
          </ContentBox>

          <ContentBox>
            <TitleBox style={{ fontSize: '16px' }}>8월호 주제 &nbsp;⟪피서⟫ </TitleBox>
            <TextBox>
              <TextTitleBox>
                {title}
                <br /> <div style={{ fontFamily: 'Batang Medium', fontSize: '16px' }}>{author}</div>
              </TextTitleBox>
              <Dummy>{text}</Dummy>
            </TextBox>
          </ContentBox>
          <SecondSection>
            <SecondSectionTitle>{author} 작가의 말</SecondSectionTitle>
            <SecondSectionText>{words}</SecondSectionText>
          </SecondSection>
          <SecondSection style={{ fontFamily: 'Batang Medium', fontSize: '13px' }}>
            * 설익은 청춘의 마음을 담은 소설레터 <br /> * 매주 수요일, 토요일 자정에 소설 한 편을 발송해드립니다.
          </SecondSection>

          <SecondSection>
            <LetterList>
              <a
                href="https://putsoseol.stibee.com/"
                alt="풋소설 링크"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                지난 이야기들 보러 가기 →
              </a>
            </LetterList>
            <LetterList>
              <a
                href="https://rollingpaper.site/rolls/1054810"
                alt="롤링페이퍼 링크"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                후기 쓰러 가기 →
              </a>
            </LetterList>
            <LetterList style={{ textDecoration: 'none' }}>
              <OtherList />
            </LetterList>
          </SecondSection>

          <SecondSection
            style={{
              color: 'gray',
              fontFamily: 'Batang Medium',
              fontSize: '13px',
              paddingTop: '80px',
              paddingBottom: '0',
              border: 'none',
            }}
          >
            <a
              href="https://www.instagram.com/putsoseol/?igsh=MWo0czl4ZGlnZW5uZg%3D%3D"
              alt="인스타링크"
              style={{ textDecoration: 'none', color: 'gray', paddingTop: '3px' }}
            >
              인스타그램
            </a>{' '}
            &nbsp; | &nbsp;
            <a
              href="https://x.com/putsoseol?s=20&mx=2"
              alt="트위터링크"
              style={{ textDecoration: 'none', color: 'gray' }}
            >
              트위터
            </a>
            <br />
            발행인&nbsp; 풋소설 <br />
            이메일 주소 putsoseol@naver.com{' '}
          </SecondSection>
        </InsideBox>

        <OutsideBox size={size}></OutsideBox>
      </TotalBox>
    </>
  );
};

const TotalBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 1000px;
`;
const OutsideBox = styled.div`
  display: flex;
  height: ${(props) => props.size || '8000px'}; // 이것이오
  background-color: green;
  width: 100px;
  flex: 10;
`;

const InsideBox = styled.div`
  display: block;
  height: 2400px;
  flex-direction: column;
  // background-color: yellow;
  width: 460px;
  padding: 20px;
`;

const LogoSideBox = styled.div`
  // display: flex;
  // background-color: black;
  // width: 30px;
  // height: 200px;
`;
const ImgBox = styled.div`
  display: flex;
  width: 200px;
  height: 90px;
  padding-left: 23%;
  // background-color: blue;
`;

const LogoSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  // padding-left: 40%;
  // background-color: purple;
  height: 180px;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(224, 224, 224, 0.2);
  // padding-left: 10px;
  // padding-right: 10px;
  border-radius: 25px;
  padding-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

const TitleBox = styled.div`
  // background-color: pink;
  padding-left: 20px;
  padding-top: 20px;
  width: 100%;
  font-family: 'Batang Bold';
  font-size: 20px;
`;

const TextBox = styled.div`
  padding: 20px;
  font-family: 'Batang Medium';
  font-size: 18px;
  line-height: 30px;
`;

const TextTitleBox = styled.div`
  padding-bottom: 20px;
  font-family: 'Batang Bold';
  font-size: 18px;
`;

const AppleImgBox = styled.div`
  width: 80px;
  height: 60px;

  // background-color: red;
  padding-left: 40%;
  // padding-top: 40px;
`;

const Dummy = styled.div`
  // line-height: 30px;
  font-size: 16px;
`;
const MusicText = styled.div`
  padding-left: 20px;
  padding-bottom: 10px;
  font-family: 'Batang Light';
  font-size: 12px;
`;

const DateText = styled.div`
  display: flex;
  padding-left: 5%;
  font-family: 'Batang Light';
  font-size: 12px;
  padding-bottom: 10px;
`;

const StyledAudio = styled.div`
  padding-left: 15px;
  padding-bottom: 5px;
  padding-top: 5px;
  text-decoration: none;
`;
const CenterMark = styled.div`
  padding-left: 50%;
`;

const SecondSection = styled.div`
  // border-bottom: 1px solid #414141;
  border-top: 1px solid #414141;
  font-family: 'batang Bold';
  padding-left: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const SecondSectionTitle = styled.div`
  font-size: 13px;
  font-family: 'Batang Medium';
  padding-left: %;
`;
const SecondSectionText = styled.div`
  font-size: 16px;
  font-family: 'Batang Bold';
  // padding-left: 7%;
  padding-top: 5px;
`;

const LetterList = styled.div`
  // margin-left: 30%;
  font-size: 16px;
  font-family: 'Batang Medium';
  // border-bottom: 1px solid;
  width: 300px;
  // color: black;
  padding-top: 0px;
  margin-top: 10px;

  // :hover {
  //   border-bottom: 1px solid black;
  // }
`;

const Footer = styled.div`
  background-color: #d9d9d9;
`;

export default Contents;
