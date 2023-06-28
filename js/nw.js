$(document).ready(function(){

    $(".main > li").click(function(){
        $(".sub").stop().slideUp()
        $(this).find(".sub").stop().slideToggle()
    }) /* main li menu click click */

    $(".item_list li").hover(function(){
        $(this).find(".hover_img").stop().fadeIn()
    },function(){
        $(".hover_img").stop().fadeOut(100)
    })/* vinyl_top hover */

    $(".ham_menu").click(function(){
        $(this).find("span").toggleClass("on")
        $(".fix").toggleClass("slidein")
    })/* ham_menu click */
})/* jQuery Close */