export default function Events() {
  return (
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur
        doloremque iusto ut adipisci quam ratione aliquam excepturi nulla in
        harum, veritatis porro
      </p>
    </div>
  );
}
// latest events section
let time = new Date("2023 9 30 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = time - dateNow;
  let days = Math.trunc(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.trunc((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.trunc((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.trunc((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".second").innerHTML =
    second < 10 ? `0${second}` : second;
  if (dateDiff <= 0) {
    clearInterval(counter);
    document.querySelector(".days").innerHTML = "00";
    document.querySelector(".hours").innerHTML = "00";
    document.querySelector(".minutes").innerHTML = "00";
    document.querySelector(".second").innerHTML = "00";
  }
}, 1000);
