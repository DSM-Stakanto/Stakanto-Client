import styled from "styled-components";
import { PlusAnimation } from "../../animation";

export const QuizAnswer = ({
  hint,
  music,
  cnt,
  showAnswer,
  point,
  date,
}: {
  hint: {
    state: number;
    setState: (value: number) => void;
  };
  music: any;
  cnt: {
    state: number;
  };
  showAnswer: (hintDiv: HTMLDivElement) => void;
  point: {
    state: number;
    setState: (value: number) => void;
  };
  date: {
    state: number;
  };
}) => {
  return (
    <>
      <Answer>
        <span id="point">
          +
          {parseInt(
            (
              -(((new Date().getTime() - date.state) / 1000) * 15) +
              5000 -
              hint.state * (3000 - 500 * hint.state)
            ).toString()
          ) > 100
            ? parseInt(
                (
                  -(((new Date().getTime() - date.state) / 1000) * 15) +
                  5000 -
                  hint.state * (3000 - 500 * hint.state)
                ).toString()
              )
            : 100}
        </span>
        <div>
          <input
            placeholder="노래 이름을 입력해주세요!"
            onKeyDown={(e: { keyCode: number; target: any }) => {
              if (
                e.keyCode === 13 &&
                e.target.value !== "" &&
                typeof document !== "undefined"
              ) {
                if (document.querySelector("iframe")?.className !== "answer") {
                  const result = music[cnt.state].answer
                    .split(",")
                    .reduce((acc: {}, elem: string) => {
                      return {
                        ...acc,
                        [elem]: elem,
                      };
                    }, {});
                  const hintDiv = document.getElementById("Sub")
                    ?.children[0] as HTMLDivElement;

                  // 정답
                  if (e.target.value.replace(/\s+/g, "") in result) {
                    showAnswer(hintDiv);
                    point.setState(
                      point.state +
                        parseInt(`
                      ${
                        parseInt(
                          (
                            -(
                              ((new Date().getTime() - date.state) / 1000) *
                              15
                            ) +
                            5000 -
                            hint.state * (3000 - 500 * hint.state)
                          ).toString()
                        ) > 100
                          ? parseInt(
                              (
                                -(
                                  ((new Date().getTime() - date.state) / 1000) *
                                  15
                                ) +
                                5000 -
                                hint.state * (3000 - 500 * hint.state)
                              ).toString()
                            )
                          : 100
                      }
                      `)
                    );
                    const pointDiv = document.getElementById(
                      "point"
                    ) as HTMLSpanElement;
                    pointDiv.classList.add("plus");
                    setTimeout(() => {
                      pointDiv.classList.remove("plus");
                    }, 2000);
                  } else {
                    // 오답
                    if (hint.state < 3) {
                      const Bit = document.getElementById(
                        "BitImage"
                      ) as HTMLImageElement;
                      Bit.classList.add("fail");
                      setTimeout(() => {
                        Bit.classList.remove("fail");
                      }, 820);

                      hintDiv.children[hint.state].classList.add("hint");
                      hint.setState(hint.state + 1);
                    } else {
                      //정답 공개
                      showAnswer(hintDiv);
                    }
                  }
                  e.target.value = "";
                }
              }
            }}
          />
          <button
            onClick={() => {
              if (typeof document !== "undefined") {
                console.log(
                  document.querySelector("iframe")?.className !== "answer"
                );
                if (document.querySelector("iframe")?.className !== "answer") {
                  const hintDiv = document.getElementById("Sub")
                    ?.children[0] as HTMLDivElement;
                  showAnswer(hintDiv);
                }
              }
            }}
          >
            SKIP
          </button>
        </div>
      </Answer>
    </>
  );
};

const Answer = styled.div`
  position: absolute;
  left: 50%;
  top: 72%;
  transform: translate(-50%, 0%);

  .plus {
    animation: ${PlusAnimation} 2s ease-in-out;
  }
  #point {
    opacity: 0;
  }
  span {
    color: ${(props) => props.theme.colors.white};
    font-size: 18px;
    margin-left: 20px;
    font-weight: 500;
    display: block;
  }
  div {
    display: inline-flex;
    align-items: flex-end;
    input {
      width: 437px;
      height: 52px;
      background-color: #6e74aa;
      color: ${(props) => props.theme.colors.white};
      box-sizing: border-box;
      padding-left: 25px;
      border: none;
      margin-top: 13px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 500;
      ::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    }
    button {
      border: none;
      margin-left: 11px;
      background-color: #df3131;
      border-radius: 10px;
      width: 102px;
      height: 52px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.colors.white};
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;
