import React from "react";
import { PiCertificateFill } from "react-icons/pi";
import ButtonLinkComponent from "../ButtonLink";

interface CardCourseComponentProps {
  title: string;
  date: string;
  company: string;
  description: string;
  image: string;
  link: string;
}

const CardCourseComponent: React.FC<CardCourseComponentProps> = ({
  title,
  date,
  company,
  description,
  image,
  link,
}) => {
  return (
    <div className="rounded-lg shadow-md p-6 gap-6 flex flex-col ">
      <div className=" flex flex-col md:flex-row-reverse items-start gap-6 ">
        <img
          src={image}
          alt="Certificación de Liderazgo"
          width={400}
          height={300}
          className="rounded-lg"
          style={{ aspectRatio: "400/300", objectFit: "cover" }}
        />
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <div className=" rounded-full p-3 bg-gray-100">
              <PiCertificateFill style={{ fontSize: "35px" }} />
            </div>
            <h2 className="text-2xl font-bold text-center">{title}</h2>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Emitido: {date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Emisor: {company}</span>
            </div>
            <p className="text-justify">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <ButtonLinkComponent name="GitHub" url={link} />
      </div>
    </div>
  );
};

export default CardCourseComponent;
