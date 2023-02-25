import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  getRankApi,
  getRankResType,
  getUserApi,
  getUserResType,
  getLogResType,
} from "../../api/dist";
import { getLogApi } from "../../api/main/getLog";

const MainPageProfile = () => {
  const [rank, setRank] = useState<getRankResType>();
  const [user, setUser] = useState<getUserResType>();
  const [log, setLog] = useState<getLogResType>();

  useEffect(() => {
    getRankApi()
      .then((res: getRankResType) => {
        setRank(res);
      })
      .catch((err) => {
        console.log(err);
      });

    getUserApi()
      .then((res: getUserResType) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });

    getLogApi({ genre: "kPop" })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Profile>
      {user ? (
        <>
          <img src={user.image} alt="profile" />
          <Name>{user.name}</Name>
        </>
      ) : (
        <>
          <img src="" alt="" />
          <Name>EastCopper</Name>
        </>
      )}
      <DashBoard>
        <TextBox>DashBoard</TextBox>
        <div></div>
      </DashBoard>
      <Ranking>
        <TextBox>Ranking</TextBox>
        {rank ? (
          <>
            {rank.genreList.map((t) => (
              <div>
                <img src={t.image} alt="" />
                <div>
                  <span>{t.name}</span>
                  <span>{t.score}</span>
                </div>
                <span>{t.genre}</span>
              </div>
            ))}
          </>
        ) : (
          <>
            {[0, 0, 0, 0].map(() => (
              <div />
            ))}
          </>
        )}
      </Ranking>
    </Profile>
  );
};
export default MainPageProfile;

const Profile = styled.div`
  width: 307px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.murkyBlue};
  display: flex;
  flex-direction: column;
  padding-left: 28px;
  > img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 50px;
    margin-top: 40px;
  }
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin-left: 50px;
  margin-top: 12px;
  color: ${(props) => props.theme.colors.white};
`;

const DashBoard = styled.div`
  margin-top: 20px;
  > div {
    margin-top: 3px;
    width: 212px;
    height: 148px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }
`;

const Ranking = styled.div`
  margin-top: 14px;
  > div {
    margin-top: 3px;
    border-radius: 5px;
    width: 212px;
    height: 59px;
    margin-bottom: 6px;
    background-color: rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    padding: 13px 4px 13px 9px;
    display: flex;
    position: relative;
    img {
      width: 33px;
      height: 33px;
      border-radius: 50%;
      object-fit: cover;
    }
    > div {
      font-weight: 400;
      display: flex;
      flex-direction: column;
      margin-left: 9px;
      span:nth-child(1) {
        font-size: 14px;
        color: ${(props) => props.theme.colors.white};
      }
      span:nth-child(2) {
        font-size: 12px;
        color: rgba(235, 235, 245, 0.5);
      }
    }
    > span {
      position: absolute;
      top: 4px;
      right: 8px;
      color: ${(props) => props.theme.colors.white};
      font-size: 11px;
      font-weight: 400;
    }
  }
`;

const TextBox = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  font-weight: 400;
`;
