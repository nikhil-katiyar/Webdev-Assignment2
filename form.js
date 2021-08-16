function check() {
  var a = document.getElementById("name").value;
  var reg1 = /^[a-zA-z\s\']{2,40}$/;
  if (reg1.test(a)) {
    document.getElementById("name1").style.color = "green";
    document.getElementById("name1").innerHTML = "Valid name";
  } else {
    document.getElementById("name1").style.color = "red";
    document.getElementById("name1").innerHTML =
      "Invalid name: Only characters";
  }
}

function checknum() {
  var a = document.getElementById("phone").value;
  var reg2 = /^\d{3}-\d{3}-\d{4}$/;
  if (reg2.test(a)) {
    document.getElementById("phone1").style.color = "green";
    document.getElementById("phone1").innerHTML = "Valid ";
  } else {
    document.getElementById("phone1").style.color = "red";
    document.getElementById("phone1").innerHTML = "Invalid";
  }
}

function checkmail() {
  var a = document.getElementById("email").value;
  var reg3 = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  if (reg3.test(a)) {
    document.getElementById("email1").style.color = "green";
    document.getElementById("email1").innerHTML = "Valid ";
  } else {
    document.getElementById("email1").style.color = "red";
    document.getElementById("email1").innerHTML = "Invalid email";
  }
}

function checkcard() {
  var a = document.getElementById("card").value;
  var reg3 = /^\d{5}$/;
  if (reg3.test(a)) {
    document.getElementById("card1").style.color = "green";
    document.getElementById("card1").innerHTML = "Valid ";
  } else {
    document.getElementById("card1").style.color = "red";
    document.getElementById("card1").innerHTML = "Invalid";
  }
}

function calc() {
  var a = document.getElementById("name").value;
  var b = document.getElementById("phone").value;
  var x = document.getElementById("a").value;
  var y = document.getElementById("b").value;
  var z = document.getElementById("c").value;
  var u = document.getElementById("d").value;
  var v = document.getElementById("e").value;
  var t = 20 * x + 40 * y + 50 * z + 25 * u + 30 * v;
  document.getElementById("order summary").innerHTML = "Name =" + a;
  document.getElementById("order summary").innerHTML += "PHone number =" + b;
  document.getElementById("ordersummary").innerHTML += "<h2>Order Summary</h2>";
  document.getElementById("ordersummary").innerHTML += "Potato =" + x;
  document.getElementById("ordersummary").innerHTML += "Tomato =" + y;
  document.getElementById("ordersummary").innerHTML += "Onion =" + z;
  document.getElementById("ordersummary").innerHTML += "Cabbage =" + u;
  document.getElementById("ordersummary").innerHTML += "Capsicum =" + v;
  document.getElementById("ordersummary").innerHTML += "Total=" + t;
}
