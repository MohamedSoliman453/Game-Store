import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Stats(props) {
  const [coun, setCoun] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCoun(true)} onExit={() => setCoun(false)}>
      <div className="box">
        {props.icon}
        <span className="num">
          {coun && <CountUp start={0} end={props.dataCount} duration={4} />}
        </span>
        <span className="info">{props.info}</span>
      </div>
    </ScrollTrigger>
  );
}
