import Button from "./Bottun";
export default function LatestEvent() {
  return (
    <section className="events" id="events">
      <Button title="LATEST EVENT" />
      <div className="container">
        <img src={require("../img/events.png")} alt="events" />
        <div className="info">
          <div className="time">
            <div className="unit">
              <span className="days"></span>
              <span>Days</span>
            </div>
            <div className="unit">
              <span className="hours"></span>
              <span>Hours</span>
            </div>
            <div className="unit">
              <span className="minutes"></span>
              <span>Minutes</span>
            </div>
            <div className="unit">
              <span className="second"></span>
              <span>Seconds</span>
            </div>
          </div>
          <h2 className="title">Tech Masters Event 2023</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
            tenetur doloremque iusto ut adipisci quam ratione aliquam excepturi
            nulla in harum, veritatis porro
          </p>
        </div>
        <div className="subscribe">
          <form action="">
            <input type="email" placeholder="Enter Your Email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </section>
  );
}
