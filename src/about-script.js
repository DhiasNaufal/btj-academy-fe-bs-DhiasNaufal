$(document).ready(function () {
  let muter = 0;
  $("#logo-dhias").on("click", function () {
    muter += 360;
    console.log("diklik");
    $("#logo-dhias").css("transition", `1s`);
    $("#logo-dhias").css("transform", `rotate(${muter}deg)`);
  });

  updateDarkMode();

  $("#darkModeCheckbox").on("click", function () {
    console.log("diklik");
    updateDarkMode();
  });

  function updateDarkMode() {
    let isChecked = $("#darkModeCheckbox").is(":checked");

    if (isChecked) {
      console.log("Checkbox is checked");
      $("body").addClass("customBG-second");
      $("#main-container").addClass("dark-mode2");
      $("nav a").css("color", "#f5f4f5");
      $("#opening-right p").css("color", "#352f64");
    } else {
      console.log("Checkbox is not checked");
      $("body").removeClass("customBG-second");
      $("#main-container").removeClass("dark-mode2");
      $("nav a").css("color", "#352f64");
      $("#opening-right p").css("color", "#2f2e2e");
    }
  }

  $("#clickme").on({
    mouseenter: function () {
      $(this).append(" -u can click me if u want me disappear :(");
    },
    mouseleave: function () {
      $(this).html("&larr; Try this");
    },
    click: function () {
      $(this).html("Goodbye :(");
      $(this).fadeOut(800, function () {
        $(this).removeClass("your-class-name");
      });
    },
  });
  var isVis = true;
  $("#wisuda").hide();
  $("#opening-left").on("click", function () {
    if (isVis) {
      $("#portrait").fadeOut(400, function () {
        $("#wisuda").fadeIn(400);
      });
    } else {
      $("#wisuda").fadeOut(400, function () {
        $("#portrait").fadeIn(400);
      });
    }
    isVis = !isVis;
  });

  var isUgmVisible = true;
  $("#kmteti").hide();
  $("#education").on("click", function () {
    if (isUgmVisible) {
      $("#ugm").fadeOut(400, function () {
        $("#kmteti").fadeIn(400);
      });
    } else {
      $("#kmteti").fadeOut(400, function () {
        $("#ugm").fadeIn(400);
      });
    }
    isUgmVisible = !isUgmVisible;
  });
  // $("#education").on("click", function () {
  //   $("#ugm").fadeOut(400, function () {
  //     $("#kmteti").fadeIn(400);
  //   });
  // });
});

$("#popupContainer").css("display", "block");

$(".close").on("click", function () {
  $("#popupContainer").css("display", "none");
});
