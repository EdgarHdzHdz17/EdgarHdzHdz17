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
    <div className="bg-card p-6 rounded-lg shadow-md flex flex-col md:flex-row-reverse items-start gap-6">
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
          <div className="bg-red-500 rounded-full p-3">
            <PiCertificateFill />
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
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
        <div className="flex justify-center items-center ">
          <ButtonLinkComponent name="Ver Certificado" url={link} />
        </div>
      </div>
    </div>
  );
};

export default CardCourseComponent;
