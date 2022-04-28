let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');


window.addEventListener('scroll', (e)=> {
    let val = window.scrollY;
    let textY = -200;
    //console.log(textY);
    bg.style.top = val*0.5 + 'px';
    moon.style.left = -val*0.5 + 'px';
    //moon.style.right = val*0.5 + 'px';
    mountain.style.top = -val*0.15 + 'px';
    road.style.top = val*0.15 + 'px';
    //road.style.bottom = -val*0.15 + 'px';
    text.style.top = val*1 +textY + 'px';
})
