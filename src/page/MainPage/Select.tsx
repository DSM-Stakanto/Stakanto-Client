import styled from "styled-components";
import BannerImg from "../../asset/image/banner.png";
import KPOPImg from "../../asset/image/K-POP.png";
import POPImg from "../../asset/image/POP.png";
import GAMEImg from "../../asset/image/GAME.png";
import JPOPImg from "../../asset/image/J-POP.png";
import { useNavigate } from "react-router-dom";

const MainPageSelect = () => {
  const navigate = useNavigate();
  const kind = [
    {
      title: "K-POP",
      sub: `K-pop refers to popular music in Korea.`,
      img: KPOPImg,
      genre: "kPop",
    },
    {
      title: "POP",
      sub: `Pop is the most basic genre of popular music, which features easy-to-attract rhythm elements, mainstream style, and traditional structure.`,
      img: POPImg,
      genre: "pop",
    },
    {
      title: "J-POP",
      sub: `J-pop is a genre that collectively refers to music projects made relatively easy to enjoy in Japanese pop songs.`,
      img: JPOPImg,
      genre: "jPop",
    },
    {
      title: "GAME",
      sub: `Game bgm not only refers to OSTs like original scores (songs without lyrics) composed as BGM, but also includes inserted songs with existing songs.`,
      img: GAMEImg,
      genre: "game",
    },
  ];
  return (
    <Select>
      <Banner>
        <span>
          Show Off Your <br />
          Singing Knowledge!
        </span>
        <img src={BannerImg} alt="" />
      </Banner>
      <GridBox>
        {kind.map((t) => (
          <div
            onClick={() => {
              navigate(`/quiz/${t.genre}`);
            }}
          >
            <img src={t.img} alt="" />
            <div>
              <div>
                <span>{t.title}</span>
                <br/>
                <span>{t.sub}</span>
              </div>
              
            </div>
          </div>
        ))}
      </GridBox>
    </Select>
  );
};
export default MainPageSelect;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 27px;
  grid-row-gap: 27px;
  margin-top: 27px;

  > div {
    width: 100%;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;

    &:hover {
      > div {
        width: 110%;
        > div {
          transform: translateY(-50px);
          >span {
            opacity: 1;
          }
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }
    > div {
      position: absolute;
      transition: 1s;
      right: 0;
      z-index: 2;
      width: 50%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%);
      backdrop-filter: blur(2.5px);
      cursor: pointer;
      div {
        transition: 1s;
        position: absolute;
        top: 50%;
        left: 25%;
        transform: translate(-15%, -50%);
        color: ${(props) => props.theme.colors.white};
        width: 70%;
        span:nth-child(1){
        font-size: 30px;
        font-weight: 900;
        opacity: 1;
        top: -30%;
        text-shadow: 0 0 7px ${(props) => props.theme.colors.pink};
        }
        span {
          top: 170%;
          width: 300px;
          opacity: 0;
          transition: 1s;
            position: absolute;
        }
      }
    }
  }
`;

const Select = styled.div`
  width: 1036px;
  height: 100vh;
  background: linear-gradient(to bottom left, #31295f, #463d7e);
  position: absolute;
  right: 0;
  border-radius: 50px 0 0 50px;
  padding: 47px 65px 0 92px;
  box-sizing: border-box;
`;
const Banner = styled.div`
  width: 879px;
  height: 161px;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    z-index: 2;
    text-shadow: 0 0 7px ${(props) => props.theme.colors.pink};
    line-height: 35px;
  }
`;
