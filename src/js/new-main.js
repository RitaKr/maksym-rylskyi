const nav = document.querySelector('nav');
const menuLinks = document.querySelectorAll('nav a');
const body = document.querySelector('body');
const header = document.querySelector('header');
const block1 = document.querySelector('#block1');
const block2 = document.querySelector('#block2');
const block3 = document.querySelector('#block3');
const block4 = document.querySelector('#block4');
const portrait = document.querySelector('#portrait');
const main = document.querySelector('#main');
const footer = document.querySelector('footer');

let startW;
let startH;
let q = 4096/878;
let qh = startH/startW;
$(document).ready(()=>{
    $('nav').fadeOut(0);
    $('#bio').fadeOut(0);
    $('#art').fadeOut(0);
    $('#facts').fadeOut(0);
    $('#memory').fadeOut(0);
    $('#toTop').fadeOut(0);
    /*$('#block1').hide(0);
    $('#block2').hide(0);
    $('#bloc3').hide(0);
    $('#block4').hide(0);*/
    startW = body.clientWidth;
    startH = header.clientHeight;
    qh = startH/startW;
    //console.log(body.clientWidth)
    calcHeights(body.clientWidth, header.clientHeight);

//----------ПЛАВНЫЙ ПЕРЕХОД К ПУНКТАМ МЕНЮ----------------------------

	$("nav").on("click","a", function (event) {
        let k;
        if (body.clientWidth>1300) {
            k = 200
        } else if (body.clientWidth>1200) {
            k = 100
        } else if (body.clientWidth>1000) {
            k = 50
        } else if (body.clientWidth>820) {
            k = 0
        } else k=-80
        //k=body.clientWidth*0.08-80
		event.preventDefault();
		let id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top+k}, 1000);
        $('#toTop').fadeIn(500);
	});

//-------------Up button------------------------------------------    
    $("#toTop").on("click", function () {
		$('body,html').animate({scrollTop: 0}, 1000);
	});
});
let lastScroll = 0;

function calcHeights(w, h) {
    if (body.clientWidth>720) {
        console.log(w, h);
        let k = 9.82;
        body.style.backgroundSize = w + 'px';
        header.style.height = Math.floor(w*q)/k + 'px';
        header.style.fontSize =Math.floor((w*q)/(28*k)) + 'px';
        console.log(header.style.fontSize);
        portrait.style.height = Math.floor(w*q)/k + 'px';
        main.style.marginTop = Math.floor(w*q)/k + 'px';
        footer.style.marginTop = Math.floor(w*q/k)*1.41 + 'px';
        document.querySelectorAll('.block').forEach(el =>{
            el.style.height = Math.floor(w*q/6.13) + 'px';
        });
        document.querySelector('section .form-container').style.fontSize =Math.floor((w*q)/(40*k)) + 'px';
        console.log(header.style.fontSize);
    } else {
        header.style.height = Math.floor(q*w)/4.55 + 'px';
        header.style.fontSize =Math.floor((w*q)/130) + 'px';
    }
}
window.addEventListener('resize', () =>{ calcHeights(body.clientWidth, header.clientHeight)});
/*
function calcNavColorsPC(w, qh, q) {
    //console.log(scrollY);
    if (scrollY<=w*qh*2) {
        $('nav').fadeOut(300);
        
        //$('#portrait').css('opacity', 1-(scrollY/1100)); 
        $('#portrait').css('bottom', -scrollY);
    // console.log(block1.clientY);
        if (scrollY<w*qh*1.4) {
            $('#toTop').fadeOut(500);
        } else {
            $('#toTop').fadeIn(500);
        }
        if (scrollY<w*qh*2.5) {
            $('#portrait').fadeIn(0);
            
            
        } else {
            $('#portrait').fadeOut(0);
            
        }
    } else {
        $('nav').fadeIn(300);
        $('#portrait').fadeOut(0);
        

        //$('nav').mouseover($('nav').fadeTo(300, 1))
        if (scrollY>w*qh*2) {
            //$('nav a').css('color', '#ffca67');
            $('#block1').show(800);
            $('.logo').attr('src','images/logo1.png');

            $('#bio').fadeIn(300);
            $(':root').css('--nav-col', '#ffca67');
        }
        if (scrollY>(w*qh*2+Math.floor(w*q/6.13))) {
            $('#block2').show(800);
            $('#art').fadeIn(300);
            $('.logo').attr('src','images/logo2.png');
            //$('nav a').css('color', '#ff9a73');
            $(':root').css('--nav-col', '#ff9a73');
        }
        if (scrollY>(w*qh*2+Math.floor(w*q/6.13)*2)) {
            $('#block3').show(800);
            $('#facts').fadeIn(300);
            $('.logo').attr('src','images/logo3.png');
            //$('nav a').css('color', '#513dc7');
            $(':root').css('--nav-col', '#513dc7');
        }
        if (scrollY>(w*qh*2+Math.floor(w*q/6.13)*3)) {
            $('#block4').show(800);
            $('#memory').fadeIn(300);
            $('.logo').attr('src','images/logo4.png');
            //$('nav a').css('color', '#513dc7');
            $(':root').css('--nav-col', '#8f1433');
        }
    }   
}
*/
function calcNavColors(){
    console.log(block1.getBoundingClientRect().top);
    if (block1.getBoundingClientRect().top > 100) {
        $('nav').fadeOut(300);
        //$('#toTop').fadeOut(500);
        $('#portrait').css('bottom', -scrollY);
        
        // console.log(block1.clientY);
            if (block1.getBoundingClientRect().top <800) {
                $('#toTop').fadeIn(500);
                $('#portrait').fadeOut(800);
                
            } else {
                $('#toTop').fadeOut(500);
                $('#portrait').fadeIn(800);
            }

    } else {
        $('#portrait').fadeOut(0);
        $('nav').fadeIn(300);
        
        if (block1.getBoundingClientRect().top <100) {
            $('#block1').show(800);
            $('.logo').attr('src','images/logo1.png');
            $('#bio').fadeIn(300);
            $(':root').css('--nav-col', '#ffca67');
        } 
        if (block2.getBoundingClientRect().top < 100) {
            $('#block2').show(800);
            $('#art').fadeIn(300);
            $('.logo').attr('src','images/logo2.png');
            //$('nav a').css('color', '#ff9a73');
            $(':root').css('--nav-col', '#ff9a73');
        }
        if (block3.getBoundingClientRect().top < 100) {
            $('#block3').show(800);
            $('#facts').fadeIn(300);
            $('.logo').attr('src','images/logo3.png');
            //$('nav a').css('color', '#513dc7');
            $(':root').css('--nav-col', '#513dc7');
        }
        if (block4.getBoundingClientRect().top < 100) {
            $('#block4').show(800);
            $('#memory').fadeIn(300);
            $('.logo').attr('src','images/logo4.png');
            //$('nav a').css('color', '#513dc7');
            $(':root').css('--nav-col', '#8f1433');
        }
    }
}
window.addEventListener('scroll', () => {
    //if (body.clientWidth>720) calcNavColorsPC(body.clientWidth, qh, q);
    //else
    calcNavColors()
})



//---------------SCROLL INDICATOR------------------

let scrollLine = document.getElementById('scrollLine');
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
});


/*
document.getElementById("emailme").onclick = function(){
let name = document.getElementById("imia");
let prizv = document.getElementById("prizviche");
let message = document.getElementById("message");       
        if(name.value !="" && prizv.value != ""  && message.value != "" ){

        alert("Дякуємо, що звернулися до нас, відправте це повідомлення через ваш улюлений поштовий клієнт.");
                window.location.href = "mailto:rylskyi@protonmail.com?subject=Лист про Максима Рильського&body=" + message.value;

}
}

*/


