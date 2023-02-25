import request from "../../..";

export interface loginResType {
  accessToken: string;
  refreshToken: string;
}

export const loginApi = async ({
  req,
}: {
  req: { accountID: string; password: string };
}) => {
  const res: loginResType = await request({
    method: "POST",
    url: "/auth/login",
    data: req,
  });
  return res;
};
