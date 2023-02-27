import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { postLogApi } from "../../api/dist";
import { genreType } from "../../types/type";

export const ResultModal = ({
  point,
  genre,
}: {
  point: number;
  genre: genreType;
}) => {
  const navigate = useNavigate();

  return (
    <MainDiv>
      <div>
        <div>
          <Title>
            Your Score is <br />
            {point}
            <br />
            Points.
          </Title>
          <button
            onClick={() => {
              postLogApi({
                req: {
                  genre: genre,
                  point: point,
                },
              }).then(() => {
                navigate("../main");
              });
            }}
          >
            Go to main →
          </button>
        </div>
        <Graph height={point / 1000}>
          <span>{point} - </span>
          <div />
        </Graph>
      </div>
    </MainDiv>
  );
};

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9;
  > div {
    animation: ${FadeIn} 1s ease-in-out;
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 55%;
    height: 60%;
    background-color: #31295f;
    border-radius: 4px;
    padding: 40px 142px 50px 60px;
    color: ${(props) => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      button {
        width: 173px;
        height: 43px;
        font-weight: 900;
        font-size: 18px;
        border: none;
        border-radius: 8px;
        background-color: ${(props) => props.theme.colors.white};
      }
    }
  }
`;

const Title = styled.span`
  font-size: 60px;
  font-weight: 900;
  line-height: 110px;
`;
const BarAnimation = (h: number) => keyframes`
    0% {
      height: 0%;
    }
    100% {
        height: ${h}%;
    }
`;

const Graph = styled.div<{ height: number }>`
  width: 45px;
  height: 300px;
  margin-bottom: 50px;
  border-radius: 14px 14px 0 0;
  background-color: rgba(253, 253, 253, 0.6);
  position: relative;

  span,
  div {
    animation: ${(props) => BarAnimation(props.height)} 1s ease-in-out;
    animation-fill-mode: forwards;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-radius: 14px 14px 0 0;
    background-color: ${(props) => props.theme.colors.pink};
    animation-delay: 1s;
  }
  span {
    right: 58px;
    background-color: transparent;
    white-space: nowrap;
    font-size: 15px;
    font-weight: 500;
  }
`;
