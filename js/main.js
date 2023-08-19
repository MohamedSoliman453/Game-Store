// show mega menu
let megaLi = document.querySelector(".other");
let megaMenu = document.querySelector(".mega-menu");
let caret = document.querySelector(".other div");
megaLi.addEventListener("click", () => {
  megaMenu.classList.toggle("active-mege");
  caret.classList.toggle("caret");
  document.addEventListener("click", (e) => {
    if (e.target !== megaLi) {
      megaMenu.classList.remove("active-mege");
      caret.classList.remove("caret");
    }
  });
});
// our skills
let section = document.getElementById("our-skills");
let skills = document.querySelectorAll(".progres span");
let percent = document.querySelectorAll(".coun");
let started = true;

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    section.offsetTop + section.offsetHeight - window.innerHeight
  ) {
    skills.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
    if (started) {
      percent.forEach((num) => count(num));
    }
    started = false;
  }
});
function count(e) {
  let goal = e.dataset.coun;
  let count = setInterval(() => {
    e.textContent++;
    if (e.textContent === goal) {
      clearInterval(count);
    }
  }, 1500 / goal);
}
// stats
let statsCoun = document.querySelectorAll(".num");
let statsSection = document.querySelector(".stats");
let statsStart = false;

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    statsSection.offsetTop + statsSection.offsetHeight - this.innerHeight
  ) {
    if (!statsStart) {
      statsCoun.forEach((coun) => countUp(coun));
    }
    statsStart = true;
  }
});
function countUp(e) {
  let goal = e.dataset.coun;
  let count = setInterval(() => {
    e.textContent++;
    if (e.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
// events
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

//scroll to top
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
// discount
// pattren for just numbers
//^[^\D]+$;
// pattren for just words
// /(^[^a-z]+$|^[^a-z]+(\w|\W)+[a-z]+$|^[a-z]+(\w|\W)+[^a-z]+$|^[a-z]+(\w|\W)+[a-z]+$|^[^a-z]+(\w|\W)+[^a-z]+$)/ig
let saveBtn = document.getElementById("save-btn");
let cancelBtn = document.getElementById("cancel-btn");
let form = document.getElementById("form-discount");
// function for sweat alert message
function SweatAlert(text) {
  return Swal.fire({
    icon: "error",
    itle: "Oops...",
    text: text,
  });
}
form.onsubmit = function (e) {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.querySelector("[name='email']").value;
  let textarea = document.querySelector('[name="message"]').value;
  let userValid = false;
  let phoneValid = false;
  let emailValid = false;
  let areaValid = false;

  // name valid
  if (
    /^[a-z]{3,}$/i.test(name) ||
    /^[a-z]{3,}\s?[a-z]{3,}$/i.test(name) ||
    /^[a-z]{3,}\s?[a-z]{3,}\s?[a-z]{3,}$/i.test(name)
  ) {
    userValid = true;
  } else if (/^[a-z]{1,2}$/i.test(name) || /^[a-z]{30, }$/i.test(name)) {
    SweatAlert("Your Name Should Be At Least 3 Char And Less Of 30 Char!");
  } else if (/^[^a-z]+$/i) {
    SweatAlert("You Sholud Type Valid Name!");
  }
  // phone valid
  if (/^\d{6,15}$/.test(phone)) {
    phoneValid = true;
  } else if (/^\d{1,5}$/.test(phone) || /^\d{16,}$/.test(phone)) {
    SweatAlert("The Length Of Phone Number Should Be 6 TO 15!");
  } else if (/^[^\D]+$/) {
    SweatAlert("You Sholud Type Just Nymbers In Phone Feild!");
  }
  // email valid
  if (/^\w+@[a-z]+.[a-z]{3}$/i.test(email)) {
    emailValid = true;
  } else if (/^\w+$/.test(email)) {
    SweatAlert("Your Mail Should Include @example.Domain!");
  } else if (/^\w+@$/.test(email)) {
    SweatAlert("Your Mail Should Include example.Domain!");
  } else if (/^\w+@\w+$/.test(email)) {
    SweatAlert("Your Mail Should Include .Domain!");
  } else if (/^\w+@[a-z]+.$/i.test(email)) {
    SweatAlert("Your Mail Should Include Domain!");
  } else if (
    /^\w+@[a-z]+.[a-z]{1,2}$/i.test(email) ||
    /^\w+@[a-z]+.[a-z]{4,}$/i.test(email)
  ) {
    SweatAlert("Please Type Your Domain Valid!");
  } else if (/^@\w+.\w+$/.test(email)) {
    SweatAlert("Please Type Your UserName!");
  } else if (/^\w+.\w+$/.test(email)) {
    SweatAlert("Your Mail Should Include UserName@!");
  } else if (/^.\w+$/.test(email)) {
    SweatAlert("Your Mail Should Include UserName@example!");
  } else if (email === "") {
    emailValid = false;
  } else {
    SweatAlert("Your Mail Should Be UserName@example.Domain Not Include @#$%!");
  }
  // text area
  if (userValid === true && emailValid === true && phoneValid === true) {
    if (/^\w{11,}$/.test(textarea)) {
      areaValid = true;
    } else if (/^\w{1,10}$/.test(textarea)) {
      document.querySelector(".over").style.display = "flex";
      document.querySelector(".over").style.animation =
        "over-show .3s linear both";
      document.body.style.overflowY = "hidden";
      // save button for send data
      saveBtn.addEventListener("click", () => {
        document.querySelector(".over").style.display = "none";
        document.body.style.overflowY = "scroll";
        // fetch() => api link
        window.location.href = `index.html`;
      });
      // cancel button to back to form
      cancelBtn.addEventListener("click", () => {
        document.querySelector(".over").style.display = "none";
        document.body.style.overflowY = "scroll";
      });
    } else if (/^[^\W]+$/) {
      SweatAlert("Please Type Your Needings Valid Not have @#$%!");
    }
  }
  // if input fields are empty
  if (name === "") {
    SweatAlert("Please fill out UserName Field");
  } else if (email === "") {
    SweatAlert("Please fill out Email Field");
  } else if (phone === "") {
    SweatAlert("Please fill out Phone Field");
  } else if (textarea === "") {
    SweatAlert("Please fill out Textarea Field");
  }
  if (
    userValid === false ||
    emailValid === false ||
    phoneValid === false ||
    areaValid === false
  ) {
    e.preventDefault();
  }
};
// imge footer
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
