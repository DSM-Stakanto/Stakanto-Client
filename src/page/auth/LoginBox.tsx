import { useState } from "react";
import styled from "styled-components";
import { loginApi, loginResType } from "../../api/dist";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [req, setReq] = useState<{
    accountID: string;
    password: string;
  }>({
    accountID: "",
    password: "",
  });

  const changeState = (
    state: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReq({ ...req, [state]: e.target.value });
  };

  return (
    <SignUpBox>
      <InputBox>
        <input
          placeholder="Enter ID"
          value={req.accountID}
          onChange={(e) => changeState("accountID", e)}
        />
        <input
          placeholder="Enter Password"
          value={req.password}
          onChange={(e) => changeState("password", e)}
          type={"password"}
        />
        <button
          onClick={() => {
            loginApi({ req: req })
              .then((res: loginResType) => {
                sessionStorage.setItem("accessToken", res.accessToken);
                sessionStorage.setItem("refreshToken", res.refreshToken);
                alert("로그인이 되었습니다.")
              })
              .catch((err) => {
                alert("아이디 혹은 비밀번호가 틀립니다.");
              });
          }}
        >
          Login
        </button>
      </InputBox>
    </SignUpBox>
  );
};
export default Login;

const SignUpBox = styled.div`
  position: relative;
  width: 750px;
  height: 360px;
  border-radius: 0 0 12px 12px;
  background-color: #4b4093;
  display: flex;
  justify-content: space-between;
  padding: 75px 150px;
  box-sizing: border-box;
  margin-top: -10px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    border: 2px solid ${(props) => props.theme.colors.white};
    border-radius: 5px;
    width: 100%;
    height: 60px;
    margin: 3px 0;
    background-color: rgba(255, 255, 255, 0.4);
    color: ${(props) => props.theme.colors.white};
    font-size: 16px;
    padding-left: 25px;
    box-sizing: border-box;
    font-weight: 500;
    margin-bottom: 10px;

    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  button {
    margin-top: 30px;
    width: 100%;
    height: 60px;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-weight: 500;
    font-size: 19px;
  }
`;
