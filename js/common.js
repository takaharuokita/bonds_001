$(window).on('load', function(){
setTimeout( function() {
$('.loading').animate({"opacity": "0"}, 600,'easeOutQuad');
}, 800 );

});




//-----------------------------------------------------------------
//　simplyScroll
//-----------------------------------------------------------------

$(function() {
  $("#simplyScroll").simplyScroll({
            autoMode: 'loop',
            speed: 0.5,
            frameRate: 30,
            horizontal: true,
            pauseOnHover: false,
            pauseOnTouch: false
            });
});

//-----------------------------------------------------------------
//　画面遷移
//-----------------------------------------------------------------






 window.addEventListener("pageshow", function(event){
  if (event.persisted) {
    // ここにキャッシュ有効時の処理を書く

    window.location.reload();
  }
});




$(function(){
$("a").on('click', function(){
   var linkUrl = $(this).attr('href');
   var linktype = $(this).attr('target');

 if ( linkUrl.indexOf('#') == -1 && linktype !== '_blank'){
	event.preventDefault();


	$('.loading').css("display","block");
	$('.link_fade').animate({"opacity": "1"}, 200,'easeOutCubic');
	   function action() {
     location.href = linkUrl;

     // ここにリンク先への移動直後に実行する内容を記述
     //  （ページ内アンカーリンクなど画面が遷移しない場合に）
   }
   setTimeout(action,200);

   }

 });
});






//-----------------------------------------------------------------
//　スクロールエフェクト
//-----------------------------------------------------------------




$(document).ready(function(){

//下層ページはデフォルトでメニュー非表示
setTimeout( function() {
$('.sub_tpl .toggle').addClass('show');
$('.sub_tpl .global_navi').addClass('hide');
$('.sub_tpl .global_navi .navi01').addClass('hide');
$('.sub_tpl .global_navi .navi02').addClass('hide');
$('.sub_tpl .global_navi .navi03').addClass('hide');
$('.sub_tpl .global_navi .navi04').addClass('hide');
$('.sub_tpl .global_navi .navi05').addClass('hide');
$('.sub_tpl .global_navi .navi06').addClass('hide');
$('.sub_tpl .global_navi .navi07').addClass('hide');
}, 500 );



//メニューが表示されるとき（ハンバーガーが非表示になる）のfunction
var menushow = function() {
setTimeout( function() {
$('.global_navi .navi01').removeClass('hide');
}, 10 );
setTimeout( function() {
$('.global_navi .navi02').removeClass('hide');
}, 50 );
setTimeout( function() {
$('.global_navi .navi03').removeClass('hide');
}, 100 );
setTimeout( function() {
$('.global_navi .navi04').removeClass('hide');
}, 150 );
setTimeout( function() {
$('.global_navi .navi05').removeClass('hide');
}, 200 );
setTimeout( function() {
$('.global_navi .navi06').removeClass('hide');
}, 250 );
setTimeout( function() {
$('.global_navi .navi07').removeClass('hide');
}, 300 );
$('.toggle').removeClass('show');
$('.global_navi').removeClass('hide');
}


//メニューが非表示になる時（ハンバーガーが表示される）のfunction
var menuhide = function() {

//100px以上スクロールしているときはトップも下層も同じ動き
var scroll = $(window).scrollTop();
if (scroll > 100) {
setTimeout( function() {
$('.global_navi .navi01').addClass('hide');
}, 10 );
setTimeout( function() {
$('.global_navi .navi02').addClass('hide');
}, 50 );
setTimeout( function() {
$('.global_navi .navi03').addClass('hide');
}, 100 );
setTimeout( function() {
$('.global_navi .navi04').addClass('hide');
}, 150 );
setTimeout( function() {
$('.global_navi .navi05').addClass('hide');
}, 200 );
setTimeout( function() {
$('.global_navi .navi06').addClass('hide');
}, 250 );
setTimeout( function() {
$('.global_navi .navi07').addClass('hide');
}, 300 );
$('.toggle').addClass('show');
$('.global_navi').addClass('hide');

//ページトップの状態では下層ページのみロールアウトでメニュー非表示になる
} else {

setTimeout( function() {
$('.sub_tpl .global_navi .navi01').addClass('hide');
}, 10 );
setTimeout( function() {
$('.sub_tpl .global_navi .navi02').addClass('hide');
}, 50 );
setTimeout( function() {
$('.sub_tpl .global_navi .navi03').addClass('hide');
}, 100 );
setTimeout( function() {
$('.sub_tpl .global_navi .navi04').addClass('hide');
}, 150 );
setTimeout( function() {
$('.sub_tpl .global_navi .navi05').addClass('hide');
}, 200 );
setTimeout( function() {
$('.sub_tpl .global_navi .navi06').addClass('hide');
}, 250 );
setTimeout( function() {
$('.sub_tpl .global_navi .navi07').addClass('hide');
}, 300 );
$('.sub_tpl .toggle').addClass('show');
$('.sub_tpl .global_navi').addClass('hide');

}
}

// ハンバーガーメニューにロールオーバーすると（実際はGlobal naviのhoverで判定している）上記のfunction実行
$('.global_navi').hover(menushow, menuhide);

//下層ページならスクロール
var sub_tpl = $('div').hasClass('sub_tpl');
if( sub_tpl ) {

$(window).scroll(function (){
var scroll = $(window).scrollTop();
if (scroll > 100){

} else {

}
});

} else {

$(window).scroll(function (){
var scroll = $(window).scrollTop();
if (scroll > 100){
menuhide();
} else {
menushow();
}
});

}







});








//スマホのハンバーガの動き

$(document).ready(function(){


$(function(){
$(".toggle").on("click", function() {




$(this).toggleClass("active");
$("#menu").toggleClass("visible");
});



});




});


//-----------------------------------------------------------------
//　イラストのスクロールエフェクト
//-----------------------------------------------------------------


$(document).ready(function(){

var w = $(window).width();

//スマホ
if(w > 960){


$(window).scroll(function (){

//リスト1列目

$('.home_use .wide_1_5_01').each(function(){
var imgPos = $(this).offset().top;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll > imgPos - windowHeight + 100){

$(this).find(".img img").delay(1).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

$(this).parent().children(".wide_1_5_02").children(".img").children("img").delay(100).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

$(this).parent().children(".wide_1_5_03").children(".img").children("img").delay(200).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

$(this).parent().children(".wide_1_5_04").children(".img").children("img").delay(300).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

$(this).parent().children(".wide_1_5_05").children(".img").children("img").delay(400).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

}
});

//リスト2列目

$('.home_use .wide_1_5_06').each(function(){
var imgPos = $(this).offset().top;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll > imgPos - windowHeight + 100){

$(this).find(".img img").delay(1).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

$(this).parent().children(".wide_1_5_07").children(".img").children("img").delay(100).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

$(this).parent().children(".wide_1_5_08").children(".img").children("img").delay(200).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

$(this).parent().children(".wide_1_5_09").children(".img").children("img").delay(300).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

$(this).parent().children(".wide_1_5_10").children(".img").children("img").delay(400).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

}
});

});





} else if(w < 959) {

$(window).scroll(function (){

//リスト1列目

$('.home_use .wide_1_5_01').each(function(){
var imgPos = $(this).offset().top;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll > imgPos - windowHeight + 100){

$(this).find(".img img").delay(1).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

$(this).parent().children(".wide_1_5_02").children(".img").children("img").delay(100).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

}
});

//リスト1列目

$('.home_use .wide_1_5_03').each(function(){
var imgPos = $(this).offset().top;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll > imgPos - windowHeight + 100){

$(this).find(".img img").delay(1).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

$(this).parent().children(".wide_1_5_04").children(".img").children("img").delay(100).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

}
});

//リスト1列目

$('.home_use .wide_1_5_05').each(function(){
var imgPos = $(this).offset().top;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll > imgPos - windowHeight + 100){

$(this).find(".img img").delay(1).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

$(this).parent().children(".wide_1_5_06").children(".img").children("img").delay(100).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

}
});

//リスト1列目

$('.home_use .wide_1_5_07').each(function(){
var imgPos = $(this).offset().top;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll > imgPos - windowHeight + 100){

$(this).find(".img img").delay(1).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

$(this).parent().children(".wide_1_5_08").children(".img").children("img").delay(100).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

}
});

//リスト1列目

$('.home_use .wide_1_5_09').each(function(){
var imgPos = $(this).offset().top;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll > imgPos - windowHeight + 100){

$(this).find(".img img").delay(1).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

$(this).parent().children(".wide_1_5_10").children(".img").children("img").delay(100).animate({
"width": "100%","margin": "0 0 -40% -50%","opacity": "1"
}, {duration: 400, easing: 'easeOutBack',})

}
});

});



}


});

//-----------------------------------------------------------------
//　スムーススクロール
//-----------------------------------------------------------------


$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});
