import styled from 'styled-components';

const ListText = () => {
  return (
    <>
      <StyledLine href="/first">우정 / 그 해의 여름</StyledLine>
      <br />
      <StyledLine href="/second">허운 / 얼짱귀신 한풀이 대작전</StyledLine>
      <br />
      <StyledLine href="/third">영서 / 보통의 저녁</StyledLine>
      <br />
      <StyledLine href="/fourth">다원 / 피서 선언</StyledLine>
      <br />
      <StyledLine href="/fifth">예림 / 그리 운 바다</StyledLine>
      <br />
      <StyledLine href="/sixth">진희 / 겨울에서 만난 여름</StyledLine>
    </>
  );
};

export default ListText;

const StyledLine = styled.a`
  text-decoration: none;
  color: black;
  padding-left: 15px;
`;
