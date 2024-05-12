import background from "../img/dots.png";
export default function Dots() {
  return (
    <div>
      <div
        className="dots dots-up"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div
        className="dots dots-down"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
    </div>
  );
}
