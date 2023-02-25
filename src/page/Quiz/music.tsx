import styled, { keyframes } from "styled-components";
import Siriwave from "react-siriwave";
import MusicIcon from "../../asset/image/music.png";

const Music = ({ auto }: { auto: number }) => {
  return (
    <MainDiv>
      <MusicBox>
        {auto === 0 ? (
          <>
            {[0, 0].map(() => (
              <Siriwave
                style={"ios9"}
                curveDefinition={[
                  {
                    color: "207, 83, 247",
                  },
                  {
                    color: "247, 99, 249",
                  },
                  {
                    color: "0, 195, 255",
                  },
                ]}
                speed={0.1}
                amplitude={2}
                width={600}
              />
            ))}
          </>
        ) : (
          <></>
        )}
      </MusicBox>
      <Bit>
        <div>
          {auto > 0 ? (
            <span>{auto}</span>
          ) : (
            <img src={MusicIcon} alt="" id="BitImage" />
          )}
        </div>
      </Bit>
      {[0, 0, 0].map((t, i) => (
        <Wave delay={i + 1} />
      ))}
    </MainDiv>
  );
};

export default Music;

const MainDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WaveAnimation = keyframes`
    0% {
        transform: scale(1,1) ;
        opacity: 0.6;
    }
    100% {
        transform: scale(3,3) ;
        opacity: 0;
    }
`;

const Wave = styled.div<{ delay: number }>`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.white};

  margin-top: -5px;
  z-index: 1;
  animation: ${WaveAnimation} 3s linear infinite;
  animation-delay: ${(props) => props.delay}s;
  position: absolute;
  left: 46.2%;
`;

const BitAniamtion = keyframes`
    0%, 60% {
        transform: scale(1,1);
    }
    70% {
        transform: scale(1.1,1.1);
    }
    90% {
        transform: scale(0.95, 0.95);
    }
`;

const Shake = keyframes`
  0%, 100% {
    filter: invert(0%);
  }
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    filter: invert(16%) sepia(89%) saturate(6054%) hue-rotate(358deg) brightness(97%) contrast(113%);
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const Bit = styled.div`
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -18px;
  > div {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.white};
    margin-bottom: 10px;
    animation: ${BitAniamtion} 1s linear infinite;
    animation-delay: 0.6s;
    img {
      width: 50px;
      height: 50px;
      position: absolute;
      left: 27%;
      top: 27%;
    }
    span {
      font-size: 50px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-weight: 900;
    }
    .fail {
      animation: ${Shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }
  }
`;

const MusicBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  > * {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
