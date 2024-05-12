export default function Galary(props) {
  return (
    <div className="box p-3 bg-light">
      <div className="img">
        <img className="img-fluid" src={props.img} alt="img-galary" />
      </div>
    </div>
  );
}
