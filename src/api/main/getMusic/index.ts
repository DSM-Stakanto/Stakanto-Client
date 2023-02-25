import { genreType } from "./../../../types/type";
import requestToken from "../../token";

export interface getMusicResType {
  id: number;
  code: string;
  name: string;
  answer: string;
  genre: genreType;
  start_at: number;
  hint: {
    id: number;
    hint1: number;
    hint2: string;
    hint3: string;
  };
}

export const getMusicApi = async (genre: genreType) => {
  const res: getMusicResType[] = await requestToken({
    method: "GET",
    url: `/music/${genre}`,
  });
  
  return res;
};
