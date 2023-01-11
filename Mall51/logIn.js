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


// SHOP MANAGER SUBMIT BUTTON EVENT 
// Get the submit button
const submitBtn1 = document.getElementById("shopManLogIn");

// Add an event listener to the submit button
submitBtn1.addEventListener("click", function(event) {
    event.preventDefault();

    // Get the username and password from the input fields
    const username = document.getElementById("shopm_userName").value;
    const password = document.getElementById("shopm_userPassword").value;

    // Send the login request
    axios.post('/login', {
        username: username,
        password: password
    })
    .then(response => {
        // Store the JWT token in a cookie
        document.cookie = `token=${response.data["access token"]}; expires=; path=/;HttpOnly;secure`;
        // Store the ShopID and Role in local storage
        localStorage.setItem("shopId", response.data.ShopID);
        localStorage.setItem("role", response.data.Role);
    })
    .catch(error => {
        console.log(error);
    });
});

// ADMIN SUBMIT BUTTON EVENT 
// Get the submit button
const submitBtn2 = document.getElementById("adminLogIn");

// Add an event listener to the submit button
submitBtn2.addEventListener("click", function(event) {
    event.preventDefault();

    // Get the username and password from the input fields
    const username = document.getElementById("admin_userName").value;
    const password = document.getElementById("admin_UserPassword").value;

    // Send the login request
    axios.post('/login', {
        username: username,
        password: password
    })
    .then(response => {
        // Store the JWT token in a cookie
        document.cookie = `token=${response.data["access token"]}; expires=; path=/;HttpOnly;secure`;
        // Store the ShopID and Role in local storage
        localStorage.setItem("shopId", response.data.ShopID);
        localStorage.setItem("role", response.data.Role);
    })
    .catch(error => {
        console.log(error);
    });
});

