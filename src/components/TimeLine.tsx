import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "keep-react";

type PropsTimeLine = {
  date: string;
  title: string;
  description: string;
};

export default function TimeLine(props: PropsTimeLine) {
  return (
    <Timeline className="mx-5 my-5 flex-1 {}">
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <p className="text-body-5 font-normal leading-[1.4] text-white">
            {props.date}
          </p>
          <h1 className="text-body-3 font-medium text-white">{props.title}</h1>
          <p className="text-body-4 font-normal text-white text-justify">
            {props.description}
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
