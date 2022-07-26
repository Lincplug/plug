function validate() {
  var createpassword = document.getElementById("createpassword").value;
  var confirmpassword = document.getElementById("Confirmpassword").value;
  if (createpassword !== confirmpassword) {
    alert("password do not match")
    return false;
  }else {
    return false;
  }
  if (fname .length <6) {
    alert("first name most be atleast 6 character long");

    return false;
  }
  if (lname .length <6) {
    alert("last name most be atleast 6 character long");

    return false;
  }
  if (username .length <10) {
    alert("user name most be atleast 10 character long");

    return false;
  }
  if (emailaddress == "") {
    alert("please enter a valid email address");

    return false;
  }
  if (password == "") {
    alert("please enter your password");
  
    return false;
  }
}
