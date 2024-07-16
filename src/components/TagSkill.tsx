interface PropsSkill {
  skill: string;
}

const TagSkill = (props: PropsSkill) => {
  return (
    <img
      src={props.skill}
      className="w-[15%] max-sm:w-[30%] rounded-md"
      alt="Skill"
    ></img>
  );
};

export default TagSkill;
