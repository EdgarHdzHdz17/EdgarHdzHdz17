import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

interface CardTimeLineProps {
  role: string;
  company: string;
  date: string;
  description: string;
}

const CardTimeLineComponent: React.FC<CardTimeLineProps> = ({
  role,
  company,
  date,
  description,
}) => {
  return (
    <>
      <div className="grid gap-1 text-sm">
        <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
        <div className="font-medium text-2xl">{role}</div>
        <div className="text-muted-foreground flex flex-row items-center gap-2">
          <FaRegBuilding />
          {company}
        </div>
        <div className="text-muted-foreground flex flex-row items-center gap-2">
          <IoTimeOutline />
          {date}
        </div>
        <div className="text-muted-foreground text-justify">{description}</div>
      </div>
    </>
  );
};

export default CardTimeLineComponent;
