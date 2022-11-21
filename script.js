function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function displayReceived() {
    document.getElementById("received1").innerHTML = "Thanks! Email received";
    document.getElementById("received2").innerHTML = "Thanks! Email received";
  }