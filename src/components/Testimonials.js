import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as blankStar } from "@fortawesome/free-regular-svg-icons";
export default function Testimonials(props) {
  return (
    <div className="box">
      <img src={props.img} alt="user-img" />
      <h5 className="fw-bold">{props.username}</h5>
      <p>Full Stack Developer</p>
      <div className="rate mb-2">
        <FontAwesomeIcon
          style={{ color: "gold", marginRight: "2px" }}
          icon={faStar}
        />
        <FontAwesomeIcon
          style={{ color: "gold", marginRight: "2px" }}
          icon={faStar}
        />
        <FontAwesomeIcon
          style={{ color: "gold", marginRight: "2px" }}
          icon={faStar}
        />
        <FontAwesomeIcon
          style={{ color: "gold", marginRight: "2px" }}
          icon={faStar}
        />
        <FontAwesomeIcon icon={blankStar} />
      </div>
      <p className="text-black-50 m-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
        reiciendis voluptatum, amet est natus quaerat
      </p>
    </div>
  );
}
