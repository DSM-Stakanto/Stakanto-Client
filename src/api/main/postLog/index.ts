import requestToken from "../../token";

export const postLogApi = async ({
  req,
}: {
  req: {
    genre: string;
    point: string;
  };
}) => {
  await requestToken({
    method: "POST",
    url: "/log",
    data: req,
  });
};
