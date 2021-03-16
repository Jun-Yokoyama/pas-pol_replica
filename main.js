$(document).ready(function(){
    $(".menuBar__wrapper").on("click",function(){
        $(".menu__wrapper").toggleClass("top0");
    })

    


    $(".img").bgSwitcher({
        images:['material/img1.jpg','material/img2.jpg','material/img3.jpg','material/img7.jpg','material/img6.jpg'],
        interval:5000,
    });
    $(".backToTop").on('click',function(){
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
        $('html').animate({
            scrollTop: 0
        },1000)
    })
});
document.addEventListener('DOMContentLoaded',function(){
    let resizer = new ResizeObserver(handleResize);
    resizer.observe(document.querySelector('html'));
});
function handleResize(entries){
    console.log("resize called");
    if(entries[0].contentRect.width > 899){
        $(".menu__wrapper").removeClass('top0');
    }
}