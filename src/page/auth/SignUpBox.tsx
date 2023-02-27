import { useEffect, useState } from "react";
import styled from "styled-components";
import { SignUpApi } from "../../api/dist";
import Roll from "../../asset/image/rotating-arrow-to-the-left.png";
import { ProfileImg } from "../../export/data";

const SignUp = ({ kind }: { kind: (value: "Login" | "SignUp") => void }) => {
  const [cnt, setCnt] = useState<number>(0);
  const [req, setReq] = useState<{
    accountID: string;
    password: string;
    name: string;
  }>({ accountID: "", password: "", name: "" });

  const changeState = (
    state: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReq({ ...req, [state]: e.target.value });
  };

  return (
    <LoginBox>
      <ImgBox>
        <img src={ProfileImg[cnt % ProfileImg.length]} alt=" " />
        <div onClick={() => setCnt(cnt + 1)}>
          <img src={Roll} alt=" " />
        </div>
      </ImgBox>
      <InputBox>
        <input
          placeholder="Enter Nickname"
          onChange={(e) => changeState("name", e)}
          maxLength={15}
        />
        <input
          placeholder="Enter ID"
          onChange={(e) => changeState("accountID", e)}
        />
        <input
          placeholder="Enter Password"
          onChange={(e) => changeState("password", e)}
          type={"password"}
        />
      </InputBox>
      <button
        onClick={() => {
          SignUpApi({
            req: {
              accountID: req.accountID,
              password: req.password,
              image: ProfileImg[cnt % ProfileImg.length],
              name: req.name,
            },
          })
            .then((res) => {
              kind("Login");
            })
            .catch((err) => {
              alert("이미 등록된 사용자입니다.");
            });
        }}
      >
        SignUp
      </button>
    </LoginBox>
  );
};
export default SignUp;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border: 2px solid ${(props) => props.theme.colors.white};
    border-radius: 5px;
    width: 250px;
    height: 50px;
    margin: 3px 0;
    background-color: rgba(255, 255, 255, 0.4);
    color: ${(props) => props.theme.colors.white};
    font-size: 16px;
    padding-left: 25px;
    box-sizing: border-box;
    font-weight: 500;

    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const ImgBox = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 6px solid ${(props) => props.theme.colors.white};
  position: relative;

  > img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    height: 85%;
    border-radius: 50%;
  }
  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.white};
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      height: 60%;
    }
  }
`;

const LoginBox = styled.div`
  position: relative;
  width: 750px;
  height: 360px;
  border-radius: 0 0 12px 12px;
  background-color: #4b4093;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
  box-sizing: border-box;
  margin-top: -10px;

  > button {
    position: absolute;
    bottom: 20px;
    right: 50px;
    border-radius: 10px;
    width: 102px;
    height: 42px;
    border: none;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
