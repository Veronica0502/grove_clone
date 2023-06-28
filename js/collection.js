$(document).ready(function(){

    $(".main > li").click(function(){
        $(".sub").stop().slideUp()
        $(this).find(".sub").stop().slideToggle()
    }) /* main li menu click click */
    
    $(".ham_menu").click(function(){
        $(this).find("span").toggleClass("on")
        $(".fix").toggleClass("slidein")
    })/* ham_menu click */
})/* jQuery Close */