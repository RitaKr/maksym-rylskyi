/*
let marker = document.getElementById('marker');
let item = document.querySelectorAll('nav a');
let home = document.querySelector('nav a:nth-child(2)');
*/
let nav = document.querySelector('nav');
let scrollLine = document.getElementById('scrollLine');
/*
function indicator (e) {
    marker.style.left = e.offsetLeft+'px';
    marker.style.width = e.offsetWidth+'px';
}

item.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        indicator(e.target);
        item.forEach(link => {
            link.classList.remove('chosen')
        })
        link.classList.remove('chosen');
        link.classList.add('chosen');
        if (link!==home) home.classList.remove('chosen');
        
    })
    link.addEventListener('click', (e) => {
        //link.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        indicator(e.target);
        item.forEach(link => {
            link.classList.remove('chosen')
        })
        link.classList.remove('chosen');
        link.classList.add('chosen');
        if (link!==home) home.classList.remove('chosen');
        
    })
})

window.onload = () => {
    
    indicator(home);
    home.classList.add('chosen');
}
*/

window.addEventListener('scroll', (e)=>{
    console.log('scrolllllllll');
    //console.log(window.pageYOffset, window.innerHeight, document.body.scrollHeight);
    let scrolled = Math.round(window.pageYOffset);
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let percentage = Math.round((scrolled/maxScroll)*100);
    console.log(percentage+'%');
    
    //console.log(scrollLine.width);
    //scrollLine.setProperty('--scroll-line-width', percentage+'%');
   
    scrollLine.style.width = percentage+'%';
  /*  if (scrolled >(window.innerHeight*0.5-100)) {
        //console.log('sticked') 
        $('nav').fadeIn(300)
    } else $('nav').fadeOut(300)*/
});

$(document).ready(()=>{
//    $('nav').fadeOut(0)
    $("#toTop").on("click", function () {
        $('body,html').animate({scrollTop: 0}, 1000);
    })
});

 $(".logo").click( function(){
             window.location.href = "index.html";
     });
