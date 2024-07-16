import Certification from "../components/Certification";
import { Congress, Bootstrap, Fundaments } from "../components/images";

export default function Courses() {
  return (
    <>
      <h1 className="text-white max-sm:text-2xl lg:text-3xl border-b-4 ">
        Cursos y Reconocimientos
      </h1>
      <div className="grid grid-rows space-y-5 my-5">
        <Certification
          title={"Congreso Interdiciplinario 2023"}
          image={Congress}
          description={
            "Certificado de mi participación en el primer congreso interdisciplinario ICAT 2023, exponiendo el tema “Robótica Educativa Móvil para la Inclusión Digital” recibido por mi proyecto Educatronicapp."
          }
          type="Reconocimiento"
          company="UNAM - ICAT"
          year="2023"
          url="https://github.com/EdgarHdzHdz17/Interdisciplinary-Congress.git"
        ></Certification>
        <Certification
          title={"Diseñando paginas con Boostrap"}
          image={Bootstrap}
          description={
            "Certificado obtenido por finalizar el curso Diseñando paginas con Boostrap emitido por la Universidad Austral en Coursera."
          }
          type="Curso"
          company="Coursera - Universidad Austral"
          year="2022"
          url="https://github.com/EdgarHdzHdz17/Full-Stack-Web-Development"
        ></Certification>
        <Certification
          title={"Fundamentos de programacion con JavaScript, HTML y CSS"}
          image={Fundaments}
          description={
            "Certificado obtenido por finalizar el curso Fundamentos de programacion con JavaScript, HTML y CSS emitido por la Universidad Duke en Coursera."
          }
          type="Curso"
          company="Coursera - Universidad Duke"
          year="2022"
          url="https://github.com/EdgarHdzHdz17/Java-Programming-and-Software-Engineering-Fundamentals"
        ></Certification>
      </div>
    </>
  );
}
