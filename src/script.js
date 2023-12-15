// Logo Muter Muter
$(document).ready(function () {
  let muter = 0;
  $("#logo-kiri").on("click", function () {
    muter += 360;
    console.log("diklik");
    $("#logo-kiri").css("transition", `1s`);
    $("#logo-kiri").css("transform", `rotate(${muter}deg)`);
  });

  $(".warning").css("display", "none");
  $("#pass").keyup(function (event) {
    if (event.originalEvent.getModifierState("CapsLock")) {
      $(".warning").css("display", "block");
    } else {
      $(".warning").css("display", "none");
    }
  });

  $("#Uname").keyup(function () {
    $("#errorNama").text("");
    $("#errorForm").text("");
  });

  $("#pass").keyup(function () {
    let password = $("#pass").val();
    errors = [];
    if (password.length < 4) {
      errors.push("4 characters");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("1 lowercase character");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("1 uppercase character");
    }
    // if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    //   errors.push("1 symbol character");
    // }
    if (!/[0-9]/.test(password)) {
      errors.push("1 number character");
    }
    TotalErrors = errors.join(", ");
    if (errors.length !== 0) {
      $("#errorPassword").text(`Your password must be at least ${TotalErrors}`);
    } else {
      $("#errorPassword").text("");
      // Note ini kalo pake .hide harus ada .show lagi..
    }
  });
});

// Memvalidasi Form
function validateForm(e) {
  e.preventDefault();
  var username = $("#Uname").val();
  var password = $("#pass").val();

  if (username.trim() === "") {
    $("#errorNama").text("Nama tidak boleh kosong");
  } else {
    $("#errorNama").text("");
  }
  if (password === "") {
    $("#errorPassword").text("Password tidak boleh kosong");
  }
  if ($("#errorNama").text() === "" && $("#errorPassword").text() === "") {
    login();
    // location.replace("../src/about-me.html");
    // alert("Login Berhasil");
  }
}

// Memunculkan dan menyembunyikan password
$("#showPassword").change(function () {
  $("#pass").prop("type", $(this).prop("checked") ? "text" : "password");
});

function login() {
  let username = $("#Uname").val();
  let password = $("#pass").val();

  $.ajax({
    url: "https://dummyjson.com/auth/login",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      username: username,
      password: password,
    }),
    statusCode: {
      200: function () {
        window.location.href = "about.html";
        console.log("masuk");
      },
    },
    error: function (error) {
      $("#errorForm").text("Alamat Email dan Password Salah");
      alert("Email dan Password Salah");
      console.error("Error:", error);
    },
  });
}

// // Memunculkan dan menyembunyikan password
// function togglePassword() {
//   var passwordInput = document.getElementById("pass");
//   var toggleCheckbox = document.getElementById("showPassword");

//   if (toggleCheckbox.checked) {
//     passwordInput.type = "text";
//   } else {
//     passwordInput.type = "password";
//   }
// }
// const logoKiri = document.getElementById("logo-kiri");
// let muter = 0;
// const putarGambar = () => {
//   muter += 360;
//   logoKiri.style.transform = `rotate(${muter}deg)`;
// };
// logoKiri.addEventListener("click", putarGambar);
//Capslock di password input form
// var inputPass = document.getElementById("pass");
// var warning = document.getElementById("capsLockWarning");
// warning.style.display = "none";
// inputPass.addEventListener("keyup", function (event) {
//   if (event.getModifierState("CapsLock")) {
//     warning.style.display = "block";
//   } else {
//     warning.style.display = "none";
//   }
// });
// Input Password error
// const errorPassword = document.getElementById("errorPassword");
// const errorNama = document.getElementById("errorNama");
// var inputUser = document.getElementById("Uname");
// inputUser.addEventListener("keyup", function (event) {
//   errorNama.innerHTML = null;
// });
// inputPass.addEventListener("keyup", function (event) {
//   let pass = document.getElementById("pass").value;
//   errors = [];
//   if (pass.length < 4) {
//     errors.push("4 characters");
//   }
//   if (!/[a-z]/.test(pass)) {
//     errors.push("1 lowercase character");
//   }
//   if (!/[A-Z]/.test(pass)) {
//     errors.push("1 uppercase character");
//   }
//   if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
//     errors.push("1 symbol character");
//   }
//   if (!/[0-9]/.test(pass)) {
//     errors.push("1 number character");
//   }
//   TotalErrors = errors.join(", ");
//   if (errors.length !== 0) {
//     errorPassword.innerHTML = `Your password must be at least ${TotalErrors}`;
//   } else {
//     errorPassword.innerHTML = "";
//   }
// });
// Memvalidasi Form
// function validateForm(e) {
//   e.preventDefault();
//   var username = document.getElementById("Uname").value;
//   var password = document.getElementById("pass").value;

//   if (username.trim() === "") {
//     document.getElementById("errorNama").innerHTML = "Nama tidak boleh kosong";
//   } else {
//     document.getElementById("errorNama").innerHTML = null;
//   }
//   if (password === "") {
//     document.getElementById("errorPassword").innerHTML =
//       "Password tidak boleh kosong";
//   }
//   if (
//     document.getElementById("errorNama").innerHTML === "" &&
//     document.getElementById("errorPassword").innerHTML === ""
//   ) {
//     location.replace("../src/about-me.html");
//     // alert("Login Berhasil");
//   }
// }
