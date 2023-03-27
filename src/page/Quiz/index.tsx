import { useEffect, useState } from "react";
import styled from "styled-components";
import Music from "./music";
import { MusicDummy } from "../../export/data";
import { getMusicApi, getMusicResType } from "../../api/dist";
import * as A from "../../animation";
import { QuizAnswer } from "./Answer";
import { useParams } from "react-router-dom";
import { genreType } from "../../types/type";
import { ResultModal } from "./ResultModal";

const QuizPage = () => {
  const genre = useParams().genre as genreType;
  const [music, setMusic] = useState<any[]>([]);
  const [point, setPoint] = useState<number>(0);
  const [cnt, setCnt] = useState<number>(0);
  const [auto, setAuto] = useState<number>(5);
  const [hint, setHint] = useState(0);
  const [answer, setAnswer] = useState<string[]>([]);
  const [date, setDate] = useState<number>(new Date().getTime());
  const [game, setGame] = useState(true);

  const autoFunc = () => {
    let time = 5;
    const timer = setInterval(() => {
      time -= 1;
      if (time === 0) {
        setDate(new Date().getTime());
        clearInterval(timer);
      }
      setAuto(time);
    }, 1000);
  };

  useEffect(() => {
    autoFunc();

    getMusicApi(genre).then((res) => {
      setMusic(res);
    });
  }, []);

  const showAnswer = (hintDiv: HTMLDivElement) => {
    console.log(new Date().getTime() - date);
    const iframe = document.querySelector("iframe") as HTMLIFrameElement;
    iframe.classList.add("answer");
    setTimeout(() => {
      if (cnt + 1 >= 20) {
        setAuto(0);
        setGame(false);
        iframe.remove();
      } else {
        iframe.classList.remove("answer");
        setCnt(cnt + 1);
        setHint(0);
        setDate(new Date().getTime());
      }
    }, 6000);

    hintDiv.children[0].classList.add("hint");
    setTimeout(() => {
      hintDiv.children[1].classList.add("hint");
      setTimeout(() => {
        hintDiv.children[2].classList.add("hint");
        setTimeout(() => {
          hintDiv.children[0].classList.remove("hint");
          hintDiv.children[1].classList.remove("hint");
          hintDiv.children[2].classList.remove("hint");
          hintDiv.children[0].classList.add("none");
          hintDiv.children[1].classList.add("none");
          hintDiv.children[2].classList.add("none");
          setTimeout(() => {
            hintDiv.children[0].classList.remove("none");
            hintDiv.children[1].classList.remove("none");
            hintDiv.children[2].classList.remove("none");
          }, 1000);
        }, 1000);
      }, 500);
    }, 500);

    setAnswer(answer.concat([music[cnt].name]));
  };

  return (
    <MainDiv>
      {!game ? <ResultModal point={point} genre={genre} /> : <></>}
      {music.length > 0 ? (
        <>
          <Tag>{genre}</Tag>
          <Sub id="Sub">
            <div>
              <TextBox>
                <span>Length: {music[cnt].hint.hint1} Word</span>
                <Tag>Hint1</Tag>
              </TextBox>
              <TextBox>
                <span>
                  {genre === "game" ? "Company" : "Singer"}:{" "}
                  {music[cnt].hint.hint2}
                </span>
                <Tag>Hint2</Tag>
              </TextBox>
              <TextBox>
                <span>initial: {music[cnt].hint.hint3}</span>
                <Tag>Hint3</Tag>
              </TextBox>
            </div>
            <div>
              <PointBox>
                {point} Point
                <span>|</span>
                {cnt + 1}/20
              </PointBox>
              {answer.map((t, i, a) => (
                <AnswerBox
                  translateY={a.length >= 4 ? (a.length - 3) * 120 : 0}
                  animation={
                    a.length === i + 1 || a.length < 4
                      ? A.AnswerAnimation
                      : a.length >= i + 4
                      ? A.AnswerAnimationNone
                      : A.AnswerAnimationUp
                  }
                  opacity={a.length >= i + 5 ? 0 : 1}
                >
                  <TextBox>
                    <span>{t}</span>
                  </TextBox>
                </AnswerBox>
              ))}
            </div>
          </Sub>

          <Music auto={auto} />

          <QuizAnswer
            hint={{ state: hint, setState: setHint }}
            music={music}
            cnt={{ state: cnt }}
            showAnswer={showAnswer}
            point={{ state: point, setState: setPoint }}
            date={{ state: date }}
          />

          <Back href="../main">돌아가기 ↩</Back>

          <iframe
            src={`https://www.youtube.com/embed/${music[cnt].code}?start=${
              music[cnt].start_at
            }&autoplay=${auto === 0 ? 1 : 0}&loop=1`}
            width={"70%"}
            height={"70%"}
          ></iframe>
        </>
      ) : (
        <></>
      )}
    </MainDiv>
  );
};
export default QuizPage;

const Back = styled.a`
  text-decoration: none;
  font-size: 20px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  bottom: 12px;
  left: 12px;
  cursor: pointer;
`;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(#0b0915, #312a5f 80%);

  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;

    pointer-events: none;
    opacity: 0;
  }

  .iframeNone {
    display: none;
  }
  .answer {
    animation: ${A.AnswerShow} 5s ease-in-out;
    animation-delay: 1.5s;
  }
`;

const PointBox = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  span {
    font-size: 30px;
    margin-bottom: 5px;
  }
`;

const AnswerBox = styled.div<{
  translateY: number;
  animation: any;
  opacity: number;
}>`
  animation: ${(props) => props.animation(props.translateY)} 2s ease-in-out;
  animation-fill-mode: forwards;
  opacity: ${(props) => props.opacity};
`;

const Tag = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 10px;
  color: ${(props) => props.theme.colors.white};
`;

const TextBox = styled.div`
  position: relative;
  width: 212px;
  height: 59px;
  background-color: #4b4093;
  color: #fff;
  margin-bottom: 12px;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 18px;
  span {
    color: ${(props) => props.theme.colors.white};
    font-size: 14px;
    font-weight: 500;
  }
  div {
    color: rgba(235, 235, 245, 0.8);
    font-size: 10px;
    font-weight: 400;
  }
`;

const Sub = styled.div`
  position: absolute;
  width: 100%;
  padding: 14px 21px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  > div:nth-child(1) > div {
    transform: translateX(-120%);
  }
  > div .hint {
    animation: ${A.TextBoxAnimation} 1s ease-in-out;
    animation-fill-mode: forwards;
  }
  > div .none {
    animation: ${A.TextBoxAnimationReverse} 1s ease-in-out;
    animation-fill-mode: forwards;
  }
`;
