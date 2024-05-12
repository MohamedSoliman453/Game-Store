import { Link } from "react-router-dom";

export default function Feature(props) {
  return (
    <div className="box text-center position-relative">
      <div className="img-holder position-relative">
        <img className="img-fluid" src={props.img} alt="cart-img" />
      </div>
      <h2 className="fw-bold mb-5 position-relative">{props.title}</h2>
      <p className="text-black-50 fs-5 pe-4 ps-4 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic
        veniam eligendi minima
      </p>
      <Link className="link" to="#">
        More
      </Link>
    </div>
  );
}
