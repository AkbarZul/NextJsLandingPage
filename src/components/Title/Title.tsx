import React from "react";

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <div className="my-16 flex flex-row items-center gap-x-8">
      <div
        className="h-[150px] w-[25px] bg-yellow-500"
        aria-hidden="true"
      ></div>
      <p className="text-black text-5xl font-semibold">{title}</p>
    </div>
  );
};

export default Title;
