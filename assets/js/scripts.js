// Navigator
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    if($(window).height() - $(window).scrollTop() > 30) {
          document.getElementById("disappear").style.top = "0";
    }
  } else {
    document.getElementById("disappear").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

function loadAlert() {
  modal.style.display = "block";
}

function doRegister() {
  var type = getCookie("usertype");

  if (type == "worker") {
    window.location.replace("/worker/register.html");
  }
  else if(type=="company") {
    window.location.replace("/company/register.html");
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function doLogin() {
  var type = getCookie("usertype");

  if (type == "worker") {
    window.location.replace("/worker/login.html");
  }
  else if(type=="company") {
    window.location.replace("/company/login.html");
  }
}
