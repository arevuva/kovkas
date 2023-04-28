/*$(document).ready(function(){
    $('.menu_burger').click(function(event){
        $('.menu_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('_lock')
    });
});
*/
let burger=document.querySelector('.menu_burger');
let heamenu=document.querySelector('.header_menu');
let body=document.querySelector('body')
burger.addEventListener('click',
event=>{
    burger.classList.toggle('active');
    heamenu.classList.toggle('active');
    body.classList.toggle('lock');
});

