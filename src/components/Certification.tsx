import ButtonGitHub from "./ButtonGitHub";

interface PropsCertificates {
  image?: string;
  title?: string;
  description?: string;
  type?: string;
  company?: string;
  year?: string;
  url?: string;
}

export default function Certification(props: PropsCertificates) {
  return (
    <div className="grid grid-cols-[40%,60%] max-sm:grid-cols-1 ">
      <div className="w-[100%] mx-auto rounded-sm items-center">
        <img className="rounded-2xl" src={props.image}></img>
      </div>
      <div className=" text-white p-5  ">
        <div className="">
          <h1 className="font-bold text-xl">{props.title}</h1>
          <p className="mt-5 text-justify ">{props.description}</p>
          <h1 className="mt-5 max-sm:text-center">{props.type}</h1>
          <h1 className="mt-5 max-sm:text-center">
            {props.company} {props.year}
          </h1>
          <div className="flex justify-center">
            <ButtonGitHub url={props.url} />
          </div>
        </div>
      </div>
    </div>
  );
}
