$(document).ready(function () {

  $("#contactForm").submit(function (event) {
    event.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    if (name === "" || email === "" || message === "") {
      $("#formMsg").text("Please fill in all fields.").css("color", "red");
    } 
    else if (!email.includes("@") || !email.includes(".")) {
      $("#formMsg").text("Please enter a valid email address.").css("color", "red");
    } 
    else {
      $("#formMsg").text("Message sent successfully!").css("color", "green");
      $("#contactForm")[0].reset();
    }
  });

  $(".navbar a").click(function (event) {
    let target = $(this).attr("href");

    if (target.startsWith("#")) {
      event.preventDefault();

      $("html, body").animate({
        scrollTop: $(target).offset().top
      }, 600);
    }
  });

  $(".section").click(function () {
    $(".section").css("background", "white");
    $(this).css("background", "#e6f7ff");
  });

  $("#skillSearch").on("keyup", function () {
    let value = $(this).val().toLowerCase();

    $("#skillsList li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().includes(value));
    });
  });

});