'use strict';
function light(value) {
    var pic;
    var e = value;
    let heading = document.querySelector('.heading');
    let bulb = document.querySelector(".body");
    if(value==0){
pic = "Off.png";
heading.innerHTML = "Light is Off";
bulb.style.backgroundColor = 'rgb(22, 22, 22)';
}
else{
    pic = "On.png";
    heading.innerHTML = "Light is On";
    bulb.style.backgroundColor = 'yellow';
    }
    document.getElementById("bulb").src = pic;
}