import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
export default function Articles(props) {
  return (
    <div className="mb-4 box">
      <img className="img-fluid" src={props.img} alt="img-cart" />
      <div className="text p-3 border-bottom">
        <h5 className="fw-bold">Test Title</h5>
        <p className="m-0 text-black-50">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit
        </p>
      </div>
      <div className="info p-3 d-flex align-items-center justify-content-between">
        <h6 className="fw-bold">Read More</h6>
        <FontAwesomeIcon className="arrow-right" icon={faRightLong} />
      </div>
    </div>
  );
}
