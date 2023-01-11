+ function($) {
  $('.palceholder').click(function() {
    $(this).siblings('input').focus();
  });

  $('.form-control').focus(function() {
    $(this).parent().addClass("focused");
  });

  $('.form-control').blur(function() {
    var $this = $(this);
    if ($this.val().length == 0)
      $(this).parent().removeClass("focused");
  });
  $('.form-control').blur();

  // validation
  $.validator.setDefaults({
    errorElement: 'span',
    errorClass: 'validate-tooltip'
  });

  $("#formvalidate1").validate({
    rules: {
      shopm_userName: {
        required: true,
        minlength: 6
      },
      shopm_userPassword: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      shopm_userName: {
        required: "Please enter your username.",
        minlength: "Please provide valid username."
      },
      shopm_userPassword: {
        required: "Enter your password to Login.",
        minlength: "Incorrect login or password."
      }
    }
  });


  // EDITED
  $("#formvalidate2").validate({
    rules: {
      admin_userName: {
        required: true,
        minlength: 6
      },
      admin_userPassword: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      admin_userName: {
        required: "Please enter your username.",
        minlength: "Please provide valid username."
      },
      admin_userPassword: {
        required: "Enter your password to Login.",
        minlength: "Incorrect login or password."
      }
    }
  });
  // STOP



}(jQuery);

