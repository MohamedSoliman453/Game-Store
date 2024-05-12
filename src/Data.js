import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faScrewdriverWrench,
  faMapLocationDot,
  faLaptopCode,
  faPalette,
  faBullhorn,
  faCheck,
  faUser,
  faCode,
  faGlobeAsia,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";
// articles section
// services
export let DataArticles = [
  {
    img: require("./img/cat-01.jpg"),
  },
  {
    img: require("./img/cat-02.jpg"),
  },
  {
    img: require("./img/cat-03.jpg"),
  },
  {
    img: require("./img/cat-04.jpg"),
  },
  {
    img: require("./img/cat-05.jpg"),
  },
  {
    img: require("./img/cat-06.jpg"),
  },
  {
    img: require("./img/cat-07.jpg"),
  },
  {
    img: require("./img/cat-08.jpg"),
  },
];
// galary section
export let Datagalary = [
  { img: require("./img/gallery-01.png") },
  { img: require("./img/gallery-02.png") },
  { img: require("./img/gallery-03.jpg") },
  { img: require("./img/gallery-04.png") },
  { img: require("./img/gallery-05.jpg") },
  { img: require("./img/gallery-06.png") },
];
// feature section
export let DataFeature = [
  {
    img: require("./img/features-01.jpg"),
    title: "Quality",
  },
  {
    img: require("./img/features-02.jpg"),
    title: "Time",
  },
  {
    img: require("./img/features-03.jpg"),
    title: "Passion",
  },
];
// testimonials section
export let DataTestimonials = [
  {
    img: require("./img/avatar-01.png"),
    username: "Mohamed Farag",
  },
  {
    img: require("./img/avatar-02.png"),
    username: "Mohamed Ibrahim",
  },
  {
    img: require("./img/avatar-03.png"),
    username: "Shady Nabil",
  },
  {
    img: require("./img/avatar-04.png"),
    username: "Amr Hendawy",
  },
  {
    img: require("./img/avatar-05.png"),
    username: "Sherief Ashraf",
  },
  {
    img: require("./img/avatar-06.png"),
    username: "Osama Mohamed",
  },
];
// team member section

export let DataTeamMember = [
  { img: require("./img/team-01.jpg") },
  { img: require("./img/team-02.jpg") },
  { img: require("./img/team-03.jpg") },
  { img: require("./img/team-04.jpg") },
  { img: require("./img/team-05.png") },
  { img: require("./img/team-06.png") },
  { img: require("./img/team-07.jpg") },
  { img: require("./img/team-08.jpg") },
];
export let DataServices = [
  {
    icon: <FontAwesomeIcon className="fa-4x mt-4" icon={faUserShield} />,
    title: "Security",
    link: "Details",
  },
  {
    icon: <FontAwesomeIcon className="fa-4x mt-4" icon={faScrewdriverWrench} />,
    title: "Fixing Issues",
    link: "Details",
  },
  {
    icon: <FontAwesomeIcon className="fa-4x mt-4" icon={faMapLocationDot} />,
    title: "Location",
    link: "Details",
  },
  {
    icon: <FontAwesomeIcon className="fa-4x mt-4" icon={faLaptopCode} />,
    title: "Coding",
    link: "Details",
  },
  {
    icon: <FontAwesomeIcon className="fa-4x mt-4" icon={faPalette} />,
    title: "Coding",
    link: "Security",
  },
  {
    icon: <FontAwesomeIcon className="fa-4x mt-4" icon={faBullhorn} />,
    title: "Coding",
    link: "Marketing",
  },
];
// How It Works? section
export let DataHowItWorks = [
  {
    img: require("./img/work-steps-1.png"),
    head: "Business Analysis",
    dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Enim nesciunt obcaecati quisquam quis laborum recusandae debitisvel",
  },
  {
    img: require("./img/work-steps-2.png"),
    head: "Business Analysis",
    dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Enim nesciunt obcaecati quisquam quis laborum recusandae debitisvel",
  },
  {
    img: require("./img/work-steps-3.png"),
    head: "Business Analysis",
    dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Enim nesciunt obcaecati quisquam quis laborum recusandae debitisvel",
  },
];
// plans section
export let DataPlans = [
  {
    title: "Basic",
    img: require("./img/hosting-basic.png"),
    amount: "$15",
    time: "Per Month",
    space: "10GB HDD Space",
    emailAddress: "5 Email Addresses",
    subDomain: "2 Subdomains",
    database: "4 Databases",
    support: "Basic Support",
    icon: <FontAwesomeIcon className="fa-4x mt-4" icon={faCheck} />,
  },
  {
    label: true,
    title: "Advanced",
    img: require("./img/hosting-advanced.png"),
    amount: "$25",
    time: "Per Month",
    space: "20GB HDD Space",
    emailAddress: "10 Email Addresses",
    subDomain: "5 Subdomains",
    database: "8 Databases",
    support: "Advanced Support",
    icon: <FontAwesomeIcon className="fa-4x mt-4" icon={faCheck} />,
  },
  {
    title: "Professional",
    img: require("./img/hosting-professional.png"),
    amount: "$15",
    time: "Per Month",
    space: "50GB HDD Space",
    emailAddress: "20 Email Addresses",
    subDomain: "10 Subdomains",
    database: "20 Databases",
    support: "Professional Support",
    icon: <FontAwesomeIcon className="fa-4x mt-4" icon={faCheck} />,
  },
];
export let DataTopVideo = [
  {
    text: "How To Create Sub Domain",
    time: "05:18",
  },
  {
    text: "Playing With The DNS",
    time: "03:18",
  },
  {
    text: "Everything About The Virtual Hosts",
    time: "05:25",
  },
  {
    text: "How To Monitor Your Website",
    time: "04:16",
  },
  {
    text: "Uncharted Beating The Last Boss",
    time: "07:48",
  },
  {
    text: "Ys Oath In Felghana Overview",
    time: "03:12",
  },
  {
    text: "Ys Series All Games Ending",
    time: "08:10",
  },
];
export let DataStats = [
  {
    icon: <FontAwesomeIcon className="fa-2x fa-fw" icon={faUser} />,
    info: "Clients",
    dataCount: 150,
  },
  {
    icon: <FontAwesomeIcon className="fa-2x fa-fw" icon={faCode} />,
    info: "Project",
    dataCount: 135,
  },
  {
    icon: <FontAwesomeIcon className="fa-2x fa-fw" icon={faGlobeAsia} />,
    info: "Countries",
    dataCount: 50,
  },
  {
    icon: <FontAwesomeIcon className="fa-2x fa-fw" icon={faMoneyBillAlt} />,
    info: "Money",
    dataCount: 500,
  },
];
