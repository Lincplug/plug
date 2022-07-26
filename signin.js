function lincplug () {


var email =
document.form.thumb.email.value;
var password =
document.form.thumb.password.value;
if (email == "" || thumbemail.test(email)) {
  window.alert("please enter a valid email address.");
email.focus();
return false;
}else {
  return true ;
}
if (password == "") {
  alert("please enter your password");
  password.focus();
  return false;
}else {
  return true;
}
if (password.length  <8) {
  alert("password should be atleast 8 character long ");
  password.focus();
  return false;
}else {
  return true;
}
}
