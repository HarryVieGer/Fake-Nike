const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick= function(){
    search.classList.toggle('active')
}

$(document).ready(function() {
    $('.accordion-item.active .accordion-body').slideDown;
    $('.accordion-header').click(function(){
        $(this).parent().toggleClass('active')  ;
        $(this).parent().children('.accordion-body').slideToggle();
    });
});