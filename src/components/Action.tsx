import Image from "next/image";
import React, { FC } from "react";
import { Button } from "./ui/button";

interface ActionProps {
  data: {
    title: string;
    image: React.ReactNode;
  };
}

const Action: FC<ActionProps> = ({ data: { title, image } }) => {
  return (
    <Button
      className="dark:bg-slate-900/40 dark:hover:bg-slate-800 bg-slate-100 hover:bg-slate-200 text-primary shadow rounded-lg flex flex-col items-center justify-center gap-2 w-24 h-24"
      variant="outline"
    >
      {image}
      <h2>{title}</h2>
    </Button>
  );
};

export default Action;
