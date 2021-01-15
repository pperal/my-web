document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('body')
    const toggleSwitch = document.querySelector('.switch')

    toggleSwitch.addEventListener('click', () => {
        main.classList.toggle('dark-theme')
    })
})

var balls = document.getElementsByClassName("eyeball");
  document.onmousemove = function(event){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";

    for(var i=0;i<2;i++){
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].style.transform = "translate("+x+","+y+")";
    }
  }


  function myFunction(event) {
    var x = (event.touches[0].clientX * 100) / window.innerWidth + "%";
    var y = (event.touches[0].clientY * 100) / window.innerHeight + "%";
  
    var balls = document.getElementsByClassName("eyeball");
    for (var i = 0; i < 2; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].style.transform = "translate(" + x + "," + y + ")";
    }
 
  }
  