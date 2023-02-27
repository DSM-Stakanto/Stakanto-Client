import { genreType } from './../../../types/type';
import requestToken from "../../token";

export const postLogApi = async ({
  req,
}: {
  req: {
    genre: genreType;
    point: number;
  };
}) => {
  await requestToken({
    method: "POST",
    url: "/log",
    data: req,
  });
};
