import requestToken from "../../token";

export interface getRankResType {
  genreList: {
    name: string;
    score: number;
    genre: string;
    image: string;
  }[];
}

export const getRankApi = async () => {
  const res: getRankResType = await requestToken({
    method: "GET",
    url: "/top-rank",
  });

  return res;
};
