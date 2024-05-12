export default function HowItWorks(prop) {
  return (
    <div className="box">
      <img src={prop.img} alt="work-step" />
      <div className="text">
        <h3>{prop.head}</h3>
        <p>{prop.dis}</p>
      </div>
    </div>
  );
}
