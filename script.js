$("form").on("submit", (e) => {
  e.preventDefault();
  console.log($("form input").val());
  validateEmail($("form input").val());
});

$(".success button").click((e) => {
  e.preventDefault();
  $(".container").removeClass("d-none");
  $(".success").addClass("d-none");
});

function validateEmail(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if ($("form input").val().match(validRegex)) {
    $("form p").addClass("d-none");
    $(".container").addClass("d-none");
    $(".success").removeClass("d-none");
    $("form input").removeClass("invalid");
  } else {
    $("form p").removeClass("d-none");
    $("form input").addClass("invalid");
    return false;
  }
}
