

document.getElementById("page").onload = function () {
    myFunction2("text-2")
    myFunction2("text-3")
    myFunction2("text-4")
    myFunction2("text-5")

};
var intervalId = null;
document.getElementById("text-2").onmouseover = function () {
    intervalId = setInterval(randomEffect, 100);

};
document.getElementById("text-2").onmouseleave = function () {
    clearInterval(intervalId);
    document.getElementById('text-2').innerText = ('Hello')

};

function myFunction2(id) {
    const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; //You can customize what letters it will cycle through
    let word = document.getElementById(id)
    let w = word.textContent // Your text goes here
    let speed = 50; // ms per frame
    let increment = 8; // frames per step. Must be >2

    let si = 0;
    let count = 0;
    let block = "";
    let fixed = "";
    //Call self x times, whole function wrapped in setTimeout
    (function rustle(i) {
        setTimeout(function () {
            if (--i) { rustle(i); }
            nextFrame(i);
            si = si + 1;
        }, speed);
    })(w.length * increment + 1);
    function nextFrame(pos) {
        for (let i = 0; i < w.length - count; i++) {
            //Random number
            let num = Math.floor(theLetters.length * Math.random());
            //Get random letter
            let letter = theLetters.charAt(num);
            block = block + letter;
        }
        if (si == (increment - 1)) {
            count++;
        }
        if (si == increment) {
            // Add a letter; 
            // every speed*10 ms
            fixed = fixed + w.charAt(count - 1);
            si = 0;
        }
        document.getElementById(id).innerText = (fixed + block)
        block = "";
    }
}



var randomEffect = function () {
    var randomString = '';
    const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
    const word = document.getElementById('text-2')
    const w = word.textContent
    var randomString = '';
    let w_length = w.length;
    for (var i = 0; i < w_length; i++) {
        var rnum = Math.floor(Math.random() * theLetters.length);
        randomString += theLetters.substring(rnum, rnum + 1);
    }
    word.innerText = (randomString);
}

//----------------------------------


const body = document.querySelector('body')
const toggleSwitch = document.querySelector('.switch')

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-theme')
})

//-----------------------------------------

const itemWords = ["work", "demo", "project"];

setInterval(function () {
    let count = Math.floor(Math.random() * 3);
    let w = itemWords[count];
    document.getElementById('words').innerHTML = w;
}, 2000);
