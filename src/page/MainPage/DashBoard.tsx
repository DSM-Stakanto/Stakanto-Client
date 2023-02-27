import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { getLogApi, getLogResType } from "../../api/dist";
import { genreType } from "../../types/type";

export const DashBoard = ({
  name,
  log,
}: {
  name: {
    state: { name: "K-POP" | "POP" | "J-POP" | "GAME"; genre: genreType };
    setState: (value: {
      name: "K-POP" | "POP" | "J-POP" | "GAME";
      genre: genreType;
    }) => void;
  };
  log: {
    state?: getLogResType;
    setState: (value: getLogResType) => void;
  };
}) => {
  const [show, setShow] = useState<boolean | string>("");

  const genreLog: {
    name: "K-POP" | "POP" | "J-POP" | "GAME";
    genre: genreType;
  }[] = [
    { name: "K-POP", genre: "kPop" },
    { name: "POP", genre: "pop" },
    { name: "J-POP", genre: "jPop" },
    { name: "GAME", genre: "game" },
  ];

  document.addEventListener("click", () =>
    show === true ? setShow(false) : setShow("")
  );

  useEffect(() => {
    getLogApi({ genre: name.state.genre }).then((res) => {
      log.setState(res);
    });
  }, [name.state, name.setState]);

  return (
    <>
      <DashBoardDiv>
        <TextBox>DashBoard</TextBox>
        <div>
          <SelectDiv>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setShow(!show);
              }}
            >
              {name.state.name}
            </div>
            <DataList state={show}>
              {genreLog.map((e, i) => (
                <div
                  key={i}
                  onClick={() => {
                    name.setState(e);
                    setShow(false);
                  }}
                >
                  {e.name}
                </div>
              ))}
            </DataList>
          </SelectDiv>
          {log.state?.scores.length ? (
            <>
              {log.state.scores.map((elm, i) => (
                <Bar height={elm / 1000}>
                  <span>{elm >= 1000 && elm < 100000 ? `${parseInt(`${elm / 1000}`)}K`: elm}</span>
                  <div />
                  <span>{i}</span>
                </Bar>
              ))}
            </>
          ) : (
            <>최근 기록이 없습니다.</>
          )}
        </div>
      </DashBoardDiv>
    </>
  );
};

const fadeInDataList = keyframes`
    0% {
        transform: translateY(-50px);
        opacity: 0;
    }100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const DataList = styled.div<{ state: boolean | string }>`
  position: absolute;
  animation: ${fadeInDataList} 0.5s;
  width: 100%;
  z-index: 2;
  transition: 1s;
  display: ${(props) => (props.state ? "block" : "none")};
  background-color: #4b4093;
  border: 2px solid rgba(0, 0, 0, 0.3);
  color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  max-height: 300px;
  overflow-y: scroll;
  font-weight: 500;
  &::-webkit-scrollbar {
    display: none;
  }
  div {
    height: 42px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    font-size: 14px;
  }

  div:hover {
    background-color: #3b307f;
    transition: 0.2s;
  }
`;

const DashBoardDiv = styled.div`
  margin-top: 20px;
  color: ${props => props.theme.colors.white};
  > div {
    margin-top: 3px;
    width: 212px;
    height: 148px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    padding: 70px 0 26px 0;
    box-sizing: border-box;
    position: relative;
  }
`;

const SelectDiv = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;

  > div:nth-child(1) {
    width: 80px;
    height: 37px;
    background-color: #4b4093;
    border: 2px solid rgba(0, 0, 0, 0.3);
    padding-left: 10px;
    color: ${(props) => props.theme.colors.white};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Bar = styled.div<{ height: number }>`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;

  > div {
    position: absolute;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.pink};
    border-radius: 8px;
    width: 8px;
    height: ${(props) => props.height}%;
  }
  span {
    position: absolute;
    font-weight: 400;
    font-size: 12px;
    color: ${(props) => props.theme.colors.white};
  }
  > span:nth-child(1) {
    bottom: 0;
    height: ${(props) => props.height + 35}%;
  }

  > span:nth-last-child(1) {
    bottom: -20px;
  }
`;
const TextBox = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  font-weight: 400;
`;
