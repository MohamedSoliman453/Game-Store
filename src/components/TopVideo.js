export default function TopVideo(props) {
  return (
    <li>
      {props.text}
      <span>{props.time}</span>
    </li>
  );
}
