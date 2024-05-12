import { Link } from "react-router-dom";
export default function Services(props) {
  return (
    <div className="box">
      {props.icon}
      <h4 className="mt-4 mb-4 fw-bold">{props.title}</h4>
      <div className="info">
        <Link to="#">{props.link}</Link>
      </div>
    </div>
  );
}
