

window.addEventListener('load', function () {
    var delayInMilliseconds = 6000; //1 second
    var logo = document.getElementById("logo");
    logo.setAttribute("style", "cursor: default;")


    setTimeout(function() {
        var logo = document.getElementById("logo");
        logo.setAttribute("style", "cursor: pointer;")
    }, delayInMilliseconds);
  })

  function comingSoonClick() {
    var logo = document.getElementById("logo");
    logo.classList.add("scale-out-center");

    var text1 = document.getElementById("text1");
    text1.classList.add("tracking-out-expand");

    var text2 = document.getElementById("text2");
    text2.classList.add("tracking-out-expand");



    setTimeout(function() {
        location.href = window.location.href + "coming-soon";
    }, 1000)
}