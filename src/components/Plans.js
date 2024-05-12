import { Link } from "react-router-dom";
export default function Plans(props) {
  return (
    <div className="box">
      {props.lable === true && <div className="label">Most Popular</div>}
      <h3 className="title">{props.title}</h3>
      <img src={props.img} alt="plans" />
      <div className="price">
        <span className="amount">{props.amount}</span>
        <span className="time">{props.time}</span>
      </div>
      <ul>
        <li>
          {props.icon}
          {props.space}
        </li>
        <li>
          {props.icon}
          {props.emailAddress}
        </li>
        <li>
          {props.icon}
          {props.subDomain}
        </li>
        <li>
          {props.icon}
          {props.database}
        </li>
        <li>
          {props.icon}
          {props.support}
        </li>
      </ul>
      <Link to="">Choose Plan</Link>
    </div>
  );
}
