import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faRandom,
  faAnglesRight,
  faMapMarkerAlt,
  faClock,
  faPhoneVolume,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import StatsBackground from "./img/stats.jpg"; // background img fro stats section
import DiscountBackground1 from "./img/discount-background1.jpg"; // background img fro Discount section
import DiscountBackground2 from "./img/discount-background2.jpg"; // background img fro Discount section
// import support
import { Link } from "react-router-dom";
import CountUp from "react-countup"; // for count up number
import ScrollTrigger from "react-scroll-trigger";
// import components
import Button from "./components/Button";
import Spike from "./components/Spike";
import Articles from "./components/Articles";
import Galary from "./components/Galary";
import Feature from "./components/Feature";
import Testimonials from "./components/Testimonials";
import TeamMember from "./components/TeamMember";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Events from "./components/Event";
import Plans from "./components/Plans";
import TopVideo from "./components/TopVideo";
import Stats from "./components/Stats";
import FormDiscount from "./components/FormDiscount";
import Dots from "./components/Dots";
import {
  DataArticles,
  Datagalary,
  DataFeature,
  DataTestimonials,
  DataTeamMember,
  DataServices,
  DataHowItWorks,
  DataPlans,
  DataTopVideo,
  DataStats,
} from "./Data";
import { useEffect, useState } from "react";


export default function Home() {
  const [counterOn, setCounterOn] = useState(false);
  useEffect(() => {
    // effect for our-skills section
    if (counterOn) {
      let prog = document.querySelectorAll(".progress .line");
      prog.forEach((skill) => {
        skill.style.width = skill.dataset.width;
      });
    }
    // effect for discount section
    let img = [DiscountBackground2, DiscountBackground1];
    let id = 0;
    setInterval(() => {
      id++;
      if (id > img.length - 1) {
        id = 0;
      }
      document.querySelector(
        ".discount .image"
      ).style.backgroundImage = `url(${img[id]})`;
    }, 10000);

    //effect for scroll to top
    let scrollToTop = document.querySelector(".scroll");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 500) {
        scrollToTop.style.display = "flex";
      } else {
        scrollToTop.style.display = "none";
      }
    });
    scrollToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });

    // effect for images footer
    let divContent = document.querySelector(".div-content");
    let contenImg = document.querySelector(".div-content img");
    let gallary = document.querySelectorAll(".images img");
    gallary.forEach((img) => {
      img.addEventListener("click", () => {
        contenImg.src = img.src;
        divContent.style.display = "flex";
        document.body.style.overflowY = "hidden";
      });
    });
    document.addEventListener("click", (e) => {
      if (e.target === divContent) {
        divContent.style.display = "none";
        document.body.style.overflowY = "scroll";
      }
    });
  });
  // articles section
  let art = DataArticles.map((e, index) => (
    <Articles key={index} img={e.img} />
  ));
  // galary section
  let galary = Datagalary.map((e, index) => <Galary key={index} img={e.img} />);
  // feature section
  let feature = DataFeature.map((e, index) => (
    <Feature key={index} img={e.img} title={e.title} />
  ));
  // testimonials section
  let testimonials = DataTestimonials.map((e, index) => (
    <Testimonials key={index} img={e.img} username={e.username} />
  ));
  // team member section
  let teamMember = DataTeamMember.map((e, index) => (
    <TeamMember key={index} img={e.img} />
  ));
  // Services section
  let services = DataServices.map((e, index) => (
    <Services key={index} icon={e.icon} title={e.title} link={e.link} />
  ));
  let howItWorks = DataHowItWorks.map((e, index) => (
    <HowItWorks key={index} img={e.img} head={e.head} dis={e.dis} />
  ));
  let plans = DataPlans.map((e, index) => (
    <Plans
      key={index}
      lable={e.label}
      title={e.title}
      img={e.img}
      amount={e.amount}
      time={e.time}
      space={e.space}
      emailAddress={e.emailAddress}
      subDomain={e.subDomain}
      database={e.database}
      support={e.support}
      icon={e.icon}
    />
  ));
  let topVideo = DataTopVideo.map((e, index) => (
    <TopVideo key={index} text={e.text} time={e.time} />
  ));
  let stats = DataStats.map((e, index) => (
    <Stats key={index} icon={e.icon} dataCount={e.dataCount} info={e.info} />
  ));
  return (
    <main>
      <div className="scroll">
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
      <section className="landing">
        <div className="container d-flex align-items-center">
          <div className="info">
            <h2 className="title fw-bold m-0 pb-3">
              Welcome, To Advanced World
            </h2>
            <p>
              Here I'am gonna share everything about my life. Books Iam reading,
              Games Iam Playing, Stories and Events
            </p>
          </div>
          <div className="img-content">
            <img
              className=""
              src={require("./img/landing-image.png")}
              alt="landing-img"
            />
          </div>
        </div>
        <Link className="go-down" to="#articles">
          <FontAwesomeIcon icon={faAnglesDown} />
        </Link>
      </section>
      <section className="articles">
        <Button title="ARTICLES" />
        <div className="container">
          <div className="content">{art}</div>
        </div>
      </section>
      <Spike />
      <section className="galary">
        <Button title="GALARY" />
        <div className="container">{galary}</div>
      </section>
      <section className="feature">
        <Button title="FEATURE" />
        <div className="container">{feature}</div>
      </section>
      <Spike />
      <section className="testimonials">
        <Button title="TESTIMONIALS" />
        <div className="container">{testimonials}</div>
      </section>
      <section className="team-member">
        <Button title="TEAM MEMBER" />
        <div className="container">{teamMember}</div>
      </section>
      <Spike />
      <section className="services">
        <Button title="SERVICES" />
        <div className="container">{services}</div>
      </section>
      <section className="our-skills">
        <Button title="OUR SKILLS" />
        <div className="container d-flex">
          <div className="img-cont">
            <img src={require("./img/skills.png")} alt="our-skills-img" />
          </div>
          <ScrollTrigger
            className="flex-grow-1"
            onEnter={() => setCounterOn(true)}
          >
            <div className="skills">
              <div className="skill">
                <h5 className="fw-bold mb-3 mt-3 d-flex justify-content-between align-items-center">
                  Html
                  <span className="num border rounded" data-coun="80">
                    {counterOn && <CountUp start={0} end={80} duration={4} />}%
                  </span>
                </h5>
                <div className="progress">
                  <span className="line" data-width="80%"></span>
                </div>
              </div>
              <div className="skill">
                <h5 className="fw-bold mb-3 mt-3 d-flex justify-content-between align-items-center">
                  CSS
                  <span className="num border rounded" data-coun="80">
                    {counterOn && <CountUp start={0} end={85} duration={4} />}%
                  </span>
                </h5>
                <div className="progress">
                  <span className="line" data-width="85%"></span>
                </div>
              </div>
              <div className="skill">
                <h5 className="fw-bold mb-3 mt-3 d-flex justify-content-between align-items-center">
                  JavaScript
                  <span className="num border rounded" data-coun="80">
                    {counterOn && <CountUp start={0} end={70} duration={4} />}%
                  </span>
                </h5>
                <div className="progress">
                  <span className="line" data-width="70%"></span>
                </div>
              </div>
              <div className="skill">
                <h5 className="fw-bold mb-3 mt-3 d-flex justify-content-between align-items-center">
                  C#
                  <span className="num border rounded" data-coun="80">
                    {counterOn && <CountUp start={0} end={80} duration={4} />}%
                  </span>
                </h5>
                <div className="progress">
                  <span className="line" data-width="80%"></span>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
      <Spike />
      <section className="how-it-works">
        <Dots />
        <Button title="HOW IT WORKS?" />
        <div className="container d-flex justify-content-between align-items-center">
          <img
            className="img-fluid"
            src={require("./img/work-steps.png")}
            alt="works"
          />
          <div className="content flex-grow-1">{howItWorks}</div>
        </div>
      </section>
      <section className="events" id="events">
        <Dots />
        <Button title="LATEST EVENT" />
        <div className="container">
          <img src={require("./img/events.png")} alt="events" />
          <Events />
          <div className="subscribe">
            <form action="">
              <input type="email" placeholder="Enter Your Email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </section>
      <Spike />
      <section className="pricing" id="pricing">
        <Dots />
        <Button title="PRICING PLANS" />
        <div className="container">{plans}</div>
      </section>
      <section className="top-video" id="top-video">
        <Dots />
        <Button title="TOP VIDEO" />
        <div className="container">
          <div className="holder">
            <div className="list">
              <div className="title">
                Top Videos
                <FontAwesomeIcon icon={faRandom} />
              </div>
              <ul>{topVideo}</ul>
            </div>
            <div className="preview">
              <img src={require("./img/video-preview.jpg")} alt="preview" />
              <div className="info">Everything About The Virtual Hosts</div>
            </div>
          </div>
        </div>
      </section>
      <Spike />
      <section
        className="stats overlay"
        id="stats"
        style={{ backgroundImage: `url(${StatsBackground})` }}
      >
        <h2 className="title">Our Awesome Stats</h2>
        <div className="container">{stats}</div>
      </section>
      <section className="discount" id="discount">
        <div
          className="image center overlay"
          style={{ backgroundImage: `url(${DiscountBackground1})` }}
        >
          <div className="content">
            <h2>We Have A Discount</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi asperiores consectetur, recusandae ratione provident
              necessitatibus, cumque delectus commodi fuga praesentium beatae.
              Totam vel similique laborum dicta aperiam odit doloribus corporis.
            </p>
            <img src={require("./img/discount.png")} alt="discount" />
          </div>
        </div>
        <FormDiscount />
        <div className="over">
          <div className="content">
            <h2 id="alert-text">Are you sure about your needings?</h2>
            <div className="btns">
              <button id="save-btn" className="btn">
                Sure
              </button>
              <button id="cancel-btn" className="btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="info">
            <h2>Advanced</h2>
            <ul className="social">
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
              </li>
            </ul>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus nulla rem, dignissimos iste aspernatur
            </p>
          </div>
          <ul className="links">
            <li>
              <FontAwesomeIcon icon={faAnglesRight} />
              <Link to="#">Important Link 1</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAnglesRight} />
              <Link to="#">Important Link 2</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAnglesRight} />
              <Link to="#">Important Link 3</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAnglesRight} />
              <Link to="#">Important Link 4</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAnglesRight} />
              <Link to="#">Important Link 5</Link>
            </li>
          </ul>
          <div className="address">
            <div className="line">
              <FontAwesomeIcon className="fas fa-fw" icon={faMapMarkerAlt} />
              <div className="location">
                Egypt, Giza, Inside The Sphinx, Room Number 220
              </div>
            </div>
            <div className="line">
              <FontAwesomeIcon className="fas fa-fw" icon={faClock} />
              <div className="location">
                Business Hours: From 10:00 To 18:00
              </div>
            </div>
            <div className="line">
              <FontAwesomeIcon className="fas fa-fw" icon={faPhoneVolume} />
              <div className="location">
                <span>+20123456789</span>
                <span>+20198765432</span>
              </div>
            </div>
          </div>
          <div className="images">
            <img src={require("./img/gallery-01.png")} alt="galary" />
            <img src={require("./img/gallery-02.png")} alt="galary" />
            <img src={require("./img/gallery-03.jpg")} alt="galary" />
            <img src={require("./img/gallery-04.png")} alt="galary" />
            <img src={require("./img/gallery-05.jpg")} alt="galary" />
            <img src={require("./img/gallery-06.png")} alt="galary" />
          </div>
        </div>
        <div className="copy-right">
          <p>
            Made By <span className="developer">Mohamed Soliman</span>
          </p>
        </div>
      </footer>
      <div className="div-content">
        <img src="" alt="" />
      </div>
    </main>
  );
}
