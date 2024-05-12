import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function TeamMember(props) {
  return (
    <div className="box position-relative">
      <div className="data d-flex align-items-center">
        <img src={props.img} alt="img-data" />
        <div className="social w-100 d-flex flex-column">
          <Link className="text-center text-black-50" to="">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link className="text-center text-black-50" to="">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link className="text-center text-black-50" to="">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
          <Link className="text-center text-black-50" to="">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>
      </div>
      <div className="info">
        <h5 className="fw-bold">Name</h5>
        <p>Simple Short Description</p>
      </div>
    </div>
  );
}
