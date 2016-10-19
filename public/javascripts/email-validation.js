const VALIDATION = {
  rules: {
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minlength: 5
    }
  },
    messages: {
    password: {
      required: "Please provide a password",
      minlength: "Your password must be at least 5 characters long"
    },
    email: "Please enter a valid email address"
  }
}

const submitHandler = function(form) {
  form.submit();
}

$(document).ready(function() {
  $('#registration').validate.addClass(Object.assign({}, VALIDATION, submitHandler))
})
