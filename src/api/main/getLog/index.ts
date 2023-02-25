import { genreType } from "../../../types/type";
import requestToken from "../../token";

export interface getLogResType {
  genre: genreType;
  scores: number[];
}

export const getLogApi = async ({ genre }: { genre: genreType }) => {
  const res = await requestToken({
    method: "GET",
    url: `log/${genre}`,
  });
  return res;
};
