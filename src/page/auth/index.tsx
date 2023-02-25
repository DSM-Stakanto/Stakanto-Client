import { useEffect, useState } from "react";
import styled from "styled-components";
import Texture from "../../asset/image/texture.png";
import Login from "./LoginBox";
import SignUp from "./SignUpBox";

const Auth = () => {
  const [kind, setKind] = useState<"Login" | "SignUp">("Login");
  return (
    <>
      <MainDiv>
        <img src={Texture} alt=" " />

        <div>
          <NavBox>
            <div
              onClick={() => setKind("Login")}
              style={{ transform: `translateY(${kind == "Login" ? 10 : 0}px)` }}
            >
              Login
            </div>
            <div
              onClick={() => setKind("SignUp")}
              style={{
                transform: `translateY(${kind == "SignUp" ? 10 : 0}px)`,
              }}
            >
              SignUp
            </div>
          </NavBox>
          {kind === "Login" ? <Login /> : <SignUp kind={setKind} />}
        </div>
      </MainDiv>
    </>
  );
};

export default Auth;

const MainDiv = styled.div`
  background: linear-gradient(to bottom left, #31295f, #504881);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NavBox = styled.div`
  width: 750px;
  display: inline-flex;
  justify-content: space-between;
  position: relative;

  > div {
    cursor: pointer;
    transition: 0.5s;
    width: 49.5%;
    height: 70px;
    background-color: #4b4093;
    border-radius: 12px 12px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
    font-weight: 900;
  }
`;
