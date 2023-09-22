$("form").on("submit", (e) => {
  e.preventDefault();
  console.log($("form input").val());
  validateEmail($("form input").val());
});

function validateEmail(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if ($("form input").val().match(validRegex)) {
    $("form p").addClass("d-none");
    $(".container").addClass("d-none");
    $(".success").removeClass("d-none");
    return true;
  } else {
    $("form p").removeClass("d-none");
    return false;
  }
}
