import requestToken from "../../token";

export interface getUserResType {
  image: string;
  name: string;
}

export const getUserApi = async () => {
  const res: getUserResType = await requestToken({
    method: "GET",
    url: "/user",
  });
  return res;
};
