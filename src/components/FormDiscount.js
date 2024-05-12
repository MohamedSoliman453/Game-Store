import { useEffect } from "react";
import Swal from "sweetalert2";
export default function FormDiscount() {
  useEffect(() => {
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
        SweatAlert(
          "Your Mail Should Be UserName@example.Domain Not Include @#$%!"
        );
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
            window.location.pathname = "/";
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
  });
  return (
    <div className="form center">
      <div className="content">
        <h2>Request A Discount</h2>
        <form id="form-discount" noValidate>
          <input
            id="name"
            className="input"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            id="phone"
            className="input"
            type="text"
            name="phone"
            placeholder="Your Phone"
          />
          <textarea
            className="input"
            name="message"
            placeholder="Tell Us About Your needings"
          ></textarea>
          <input type="submit" name="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
