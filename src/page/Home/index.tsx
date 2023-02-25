import styled from "styled-components";
import titleImg from "../../asset/image/title.png";
import homeImg from "../../asset/image/homeImage.png";

const Home = () => {
  return (
    <>
      <MainDiv>
        <Title>
          <img src={titleImg} alt="" />
          <span>
            Song guessing game,
            <br />
            challenge the ranking by matching
            <br />
            the song title with Stakanto!
          </span>
          <a href="/auth">Click to Play →</a>
        </Title>
        <BorderDiv>
          <img src={homeImg} alt="" />
        </BorderDiv>
      </MainDiv>
    </>
  );
};

export default Home;

const BorderDiv = styled.div`
  margin-right: 100px;
  margin-top: 55px;
  img {
    width: 340px;
    height: 556px;
    object-fit: contain;
  }
`;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 81px;
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
`;

const Title = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  img {
    width: 696px;
    height: 324px;
    object-fit: contain;
  }
  span {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 900;
    margin-top: 24px;
  }
  a {
    margin-top: 27px;
    background-color: ${(props) => props.theme.colors.white};
    padding: 16px 10px 16px 26px;
    width: 173px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.black};
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
  }
`;
