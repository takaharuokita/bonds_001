//-----------------------------------------------------------------
//　kv
//-----------------------------------------------------------------


$(window).on('load', function(){

$('.kv01').css("opacity","0");
$('.kv02').css("opacity","0");
$('.kv03').css("opacity","0");
$('.kv01').css("z-index","20");
$('.kv02').css("z-index","10");
$('.kv03').css("z-index","10");

setTimeout( function() {
$('.kv_load span').animate({"opacity": "0"}, 600,'easeOutCubic');
}, 600 );

setTimeout( function() {
$('.kv_load').animate({"opacity": "0"}, 1000,'easeOutCubic');
}, 1000 );



setTimeout( function() {
$('.kv01').animate({"opacity": "1"}, 1400,'easeOutQuad');
$('.kv_list01').css({transform:'scale(1)'}).animate({scale:'1.04'},5000,'easeOutSine');
}, 1000 );



setTimeout( function() {
$('.home_kv .title span.title01').animate({"opacity": "1","margin-bottom": "6.5rem"}, 500,'easeOutQuad');
}, 2200 );

setTimeout( function() {
$('.home_kv .title span.title02').animate({"opacity": "1","margin-bottom": "1.5rem"}, 800,'easeOutQuad');
}, 2200 );



setTimeout( function() {
    setTimeout('rect()');
}, 1900 );


});




function rect() {


setTimeout( function() {
$('.kv01').animate({"opacity": "0"}, 1000,'easeOutQuad');
$('.kv02').animate({"opacity": "1"}, 1000,'easeOutQuad');
$('.kv_list02').css({transform:'scale(1)'}).animate({scale:'1.04'},5000,'easeOutSine');
$('.kv_list03').css({transform:'scale(1)'}).animate({scale:'1'},10,'');
}, 4000 );



setTimeout( function() {
$('.kv01').css("z-index","10");
$('.kv02').css("z-index","20");
}, 5000 );

setTimeout( function() {
$('.kv02').animate({"opacity": "0"}, 1000,'easeOutQuad');
$('.kv03').animate({"opacity": "1"}, 1000,'easeOutQuad');
$('.kv_list03').css({transform:'scale(1)'}).animate({scale:'1.04'},5000,'easeOutSine');
$('.kv_list01').css({transform:'scale(1)'}).animate({scale:'1'},10,'');
}, 9000 );



setTimeout( function() {
$('.kv02').css("z-index","10");
$('.kv03').css("z-index","20");
}, 10000 );


setTimeout( function() {
$('.kv03').animate({"opacity": "0"}, 1000,'easeOutQuad');
$('.kv01').animate({"opacity": "1"}, 1000,'easeOutQuad');
$('.kv_list01').css({transform:'scale(1)'}).animate({scale:'1.04'},5000,'easeOutSine');
$('.kv_list02').css({transform:'scale(1)'}).animate({scale:'1'},10,'');
}, 14000 );

setTimeout( function() {
$('.kv03').css("z-index","10");
$('.kv01').css("z-index","20");
}, 14999 );

setTimeout('rect()', 15000);
}
