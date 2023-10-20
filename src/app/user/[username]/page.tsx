import { FC } from "react";

interface pageProps {
  params: {
    username: string;
  };
}

const page: FC<pageProps> = ({ params }) => {
  return <div className="pt-20 pl-5 text-center">USER: {params.username}</div>;
};

export default page;
