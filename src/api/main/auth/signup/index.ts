import request from "../../..";

export const SignUpApi = async ({
  req,
}: {
  req: {
    accountID: string;
    password: string;
    image: string;
    name: string;
  };
}) => {
  await request({
    method: "POST",
    url: "/auth/sign-up",
    data: req,
  });
};
