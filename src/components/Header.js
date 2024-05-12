import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faCirclePlay,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCheckCircle,
  faBuilding,
  faUser,
  faComments,
  faClipboard,
  faCalendar,
  faChartBar,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
export default function Header() {
  function MegaMenu() {
    document.querySelector(".mega-menu").classList.toggle("mega-menu-onClick");
    document.querySelector(".caret").classList.toggle("caret-onClick");
  }
  return (
    <section className="header">
      <div className="container position-relative d-flex justify-content-center justify-content-md-between align-items-center flex-wrap h-100">
        <div className="logo">
          <Link className="fw-bold d-flex align-items-center" to="/">
            ADVANCED
          </Link>
        </div>
        <div className="container-list">
          <ul className="d-flex m-0">
            <li>
              <Link
                className="main-list pe-4 ps-4 d-flex align-items-center text-black"
                to="#articles"
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                className="main-list pe-4 ps-4  d-flex align-items-center text-black"
                to="#galary"
              >
                Galary
              </Link>
            </li>
            <li>
              <Link
                className="main-list pe-4 ps-4  d-flex align-items-center text-black"
                to="#feature"
              >
                Feature
              </Link>
            </li>
            <li>
              <Link
                className="main-list pe-4 ps-4 d-flex align-items-center text-black"
                onClick={MegaMenu}
              >
                Other Links
                <div className="caret"></div>
              </Link>
              {/* Mega menu */}
              <div className="mega-menu position-absolute start-0 top w-100 d-flex">
                <div className="img-mega">
                  <img
                    className="img-fluid"
                    src={require("../img/megamenu.png")}
                    alt="list-img"
                  />
                </div>
                <ul className="links p-0">
                  <li className="border-bottom">
                    <Link
                      to="#testimonials"
                      className="d-block p-3 w-100 fw-bold position-relative"
                    >
                      <FontAwesomeIcon className="pe-3" icon={faComments} />
                      Testimonials
                    </Link>
                  </li>
                  <li className="border-bottom">
                    <Link
                      to="#team-member"
                      className="d-block p-3 w-100 fw-bold position-relative"
                    >
                      <FontAwesomeIcon className="pe-3" icon={faUser} />
                      Team Members
                    </Link>
                  </li>
                  <li className="border-bottom">
                    <Link
                      to="#services"
                      className="d-block p-3 w-100 fw-bold position-relative"
                    >
                      <FontAwesomeIcon className="pe-3" icon={faBuilding} />
                      Services
                    </Link>
                  </li>
                  <li className="border-bottom">
                    <Link
                      to="#our-skills"
                      className="d-block p-3 w-100 fw-bold position-relative"
                    >
                      <FontAwesomeIcon className="pe-3" icon={faCheckCircle} />
                      Our Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#testimonials"
                      className="d-block p-3 w-100 fw-bold position-relative"
                    >
                      <FontAwesomeIcon className="pe-3" icon={faClipboard} />
                      How It Works
                    </Link>
                  </li>
                </ul>
                <ul className="links p-0">
                  <li className="border-bottom">
                    <Link
                      to="#testimonials"
                      className="d-block p-3 w-100 fw-bold position-relative"
                    >
                      <FontAwesomeIcon className="pe-3" icon={faCalendar} />
                      Events
                    </Link>
                  </li>
                  <li className="border-bottom">
                    <Link
                      to="#team-member"
                      className="d-block p-3 w-100 fw-bold position-relative"
                    >
                      <FontAwesomeIcon className="pe-3" icon={faServer} />
                      Pricing Plance
                    </Link>
                  </li>
                  <li className="border-bottom">
                    <Link
                      to="#services"
                      className="d-block p-3 w-100 fw-bold position-relative"
                    >
                      <FontAwesomeIcon className="pe-3" icon={faCirclePlay} />
                      Top Videos
                    </Link>
                  </li>
                  <li className="border-bottom">
                    <Link
                      to="#our-skills"
                      className="d-block p-3 w-100 fw-bold position-relative"
                    >
                      <FontAwesomeIcon className="pe-3" icon={faChartBar} />
                      Stats
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#testimonials"
                      className="d-block p-3 w-100 fw-bold position-relative"
                    >
                      <FontAwesomeIcon className="pe-3" icon={faPercent} />
                      Request A Descount
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
