$(document).ready(function(){
    let a=1;
    let slides = document.querySelectorAll('.c');
    let img_counter=slides.length;
    let counter=1;
    let img =document.getElementById('slider_img');
    changeImg(slides[0], 0)
/*Картинки для слайдера должны быть формата png и называться img1 (img2 img3 и тд)
можно использовать jpg например, но тогда надо заменить все png в скрипте на jpg. 
название не то что можно, а даже нужно поменять на своё. Главное что б у всех картинок слайдера оно было одинаковым и отличалось только цифрой в конце
каждое название должно иметь цифру в конце. первая картинка 1, вторая 2, третя 3 и тд. (парк1.jpg, парк2.jpg)
*/
    
    setInterval(function(){
        console.log(slides[counter-1]);
        changeImg(slides[counter-1], counter-1);
        counter++;
        if (counter> img_counter){
            counter=1;
        }
    },5000);
    
    slides.forEach((c, i) => {
        c.addEventListener('click', ()=>{
            changeImg(c,i);
            counter = i+1;
        });
    })
    function changeImg(c, i){
        //console.log(c)
        img.setAttribute('src', 'images/slider/'+(i+1)+'.png');
        $(`#block2`).css('background-color', '#00000090');
        $(`#block2`).css('background-image', 'url(images/slider/'+(i+1)+'.png)');
        
        //$(`.control div`).css('opacity', '0.4');
        $(`.control div`).css('background', 'rgba(255, 255, 255, 0.35)');
        $(`.control div`).css('color', 'rgba(255, 255, 255, .9)');
        $(`.control div`).css('transform', 'scale(1)');
        c.style.background = 'var(--curCol)';
        c.style.color = 'white';
        c.style.transform = 'scale(1.1)' 
    }

    /*$('.slider').hover(function(){
        setInterval(()=>{
            console.log(slides[counter-1]);
            changeImg(slides[counter-1], counter-1);
            counter++;
            if (counter> img_counter){
                counter=1;
            }
        },3000);
    });*/


});