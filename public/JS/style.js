/*choses item from array once*/

function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

/*Colors used in background*/

var bgcolor = randomNoRepeats(["#ff867c","#ff77a9","#df78ef","#b085f5","#8e99f3","#80d6ff","#73e8ff","#6ff9ff","#64d8cb","#98ee99","#cfff95","#ffff89","#d4e157","#ffee58","#ffca28","#ffa726","#ff7043","#ef5350","#ec407a","#42a5f5","#29b6f6","#26c6da"]);

/*Applies Background color to dom elements*/

const init = function(){
    let items = $('li');
    for (let i = 0; i < items.length; i++){
      items[i].style.background = bgcolor();
    }
}



/*toggles dropdown content from the invention*/

$(".expand").click(function(){
  var title = $(this).siblings(".infocard").children(".infobridge").children(".infoleft").children(".infoexpansion");
  var ex = $(this);
  var name = $(this).siblings(".infocard").children(".infobridge").children(".infoleft").children(".invention").children().children(".strike");
  var pic = $(this).siblings(".infocard").children(".infobridge").children(".inforight");
  var par = $(this).siblings(".infocard").children(".infobridge").children(".infocardchild");
  var fullspan = $(this).siblings(".infocard").children(".infobridge");
  var wiki = $(this).siblings(".iconcol");
  var core = $('.infoexpansion');
  var box = $(this).parent().parent().prev();
  event.stopPropagation();
  if($(this).hasClass("rota")) {
    $('.infoexpansion').removeClass("showcard");
    $('.expand').removeClass("rota");
    $('.strike').removeClass("name");
    $('.inforight').removeClass("inforightshow");
    $('.infocardchild').removeClass("inforightshow");
    $('.infobridge').removeClass("fullspan");
    $('.iconcol').removeClass("incondisp");
  } else {
    $('.infoexpansion').removeClass("showcard");
    $('.expand').removeClass("rota");
    $('.strike').removeClass("name");
    $('.inforight').removeClass("inforightshow");
    $('.infocardchild').removeClass("inforightshow");
    $('.infobridge').removeClass("fullspan");
    $('.iconcol').removeClass("incondisp");
    title.toggleClass("showcard");
    ex.toggleClass("rota");
    name.toggleClass("name");
    pic.toggleClass("inforightshow");
    par.toggleClass("inforightshow");
    fullspan.toggleClass("fullspan");
    wiki.toggleClass("incondisp");
    setTimeout(function() {
      var hH = $('.navbar').outerHeight(),
          hHm = hH+10
      $('html, body').animate({
            scrollTop: $(ex).offset().top-hHm
        }, 200);
    }, 350);
  }
});

$(".iconhold").click(function(){
  event.stopPropagation();
});

/*
$(".invention").click(function(){
  event.stopPropagation();
  var title = $(this).siblings(".infoexpansion");
  var ex = $(this).parent().parent().parent().siblings(".expand");
  var name = $(this).children().children(".strike");
  var pic = $(this).parent().siblings(".inforight");
  var core = $('.infoexpansion');
  $('.infoexpansion').removeClass("showcard");
  $('.expand').removeClass("rota");
  $('.strike').removeClass("name");
  $('.inforight').removeClass("inforightshow");
  title.toggleClass("showcard");
  ex.toggleClass("rota");
  name.toggleClass("name");
  pic.toggleClass("inforightshow");
});
*/


$(".cardhold").click(function(){
  var title = $(this).children(".titlecard").children(".infocard").children(".infobridge").children(".infoleft").children(".infoexpansion");
  var ex = $(this).children(".titlecard").children(".expand");
  var name = $(this).children(".titlecard").children(".infocard").children(".infobridge").children(".infoleft").children("invention").children(".invention").children(".strike");
  var pic = $(this).children(".titlecard").children(".infocard").children(".infobridge").children(".inforight");
  var par = $(this).children(".titlecard").children(".infocard").children(".infobridge").children(".infocardchild");
  var fullspan = $(this).children(".titlecard").children(".infocard").children(".infobridge")
  var core = $('.infoexpansion');
  var wiki = $(this).children(".titlecard").children(".iconcol");
  var box = $(this).prev();
  $('.infoexpansion').removeClass("showcard");
  $('.expand').removeClass("rota");
  $('.strike').removeClass("name");
  $('.infocardchild').removeClass("inforightshow");
  $('.inforight').removeClass("inforightshow");
  $('.infobridge').removeClass("fullspan");
  $('.iconcol').removeClass("incondisp");
  title.toggleClass("showcard");
  ex.toggleClass("rota");
  name.toggleClass("name");
  par.toggleClass("inforightshow");
  pic.toggleClass("inforightshow");
  fullspan.toggleClass("fullspan");
  wiki.toggleClass("incondisp");
  smallnav();
  setTimeout(function() {
    var hH = $('.navbar').outerHeight(),
        hHm = hH+10
    $('html, body').animate({
          scrollTop: $(ex).offset().top-hHm
      }, 200);
  }, 350);
});


/*toggles dropdown from the plus sign*/



/*variable navbar functions*/

function expandednav() {
  $('#item0').removeClass('animater');
  $('.headl').removeClass('small');
  $('.heightcomp').css("height","80vh");
  $('.defaulp').css("display","block");
  $('.headlinehold').addClass('headlinemargin');
  $('.headlinehold').css("margin-top","5vh");
  $('.headlinehold').css("margin-bottom","5vh");
  $('.holdspace').css("width","40vw");
  $('#one').html("w");
  $('#two').html("e");
  $('#three').html("b");
  $('.collapse').css("display","block");
}

function smallnav() {
  $('.headl').addClass('small');
  $('#item0').addClass('animater');
  $('.bodygrid').css("margin-top","100px");
  $('.defaulp').css("display","none");
  $('.headlinehold').removeClass('headlinemargin');
  $('.headlinehold').css("margin-top","12px");
  $('.headlinehold').css("margin-bottom","12px");
  $('.holdspace').css("width","90px");
  $('#one').html("w");
  $('#two').html("w");
  $('#three').html("w");
  $('.collapse').css("display","none");
}

/*Calls navbar functions on scroll*/

$(document).ready(function() {
  var zip = $(window).scrollTop(),
      wS =$(this).scrollTop(),
      hH = $('.navbar').outerHeight(),
      wD = (hH+wS);
  if (wS <= 1)  {
    expandednav();
    $(".bodygrid").removeClass('noscroll');
    $(".bodygrid").removeClass('stickify');
    setTimeout(function() {
      $(".bodygrid").css("margin-top", hH);
    }, 300);
  } else {
    smallnav();
  }
});


$(window).scroll(function() {
  var zip = $(window).scrollTop(),
      wS = $(this).scrollTop(),
      hH = $('.navbar').outerHeight(),
      wD = (hH+wS);
  if (wS <= 1) {
    expandednav();
    $(".bodygrid").removeClass('noscroll');
    $(".bodygrid").removeClass('stickify');
    setTimeout(function() {
      hHH = $('.navbar').outerHeight()
      hHM = hHH;
      $(".bodygrid").css("margin-top", hHM);
      console.log(hHH);
    }, 300);
  } else {
    smallnav();
    $(".bodygrid").removeClass('noscroll');
    $(".bodygrid").addClass('stickify');
    $("footer").removeClass('scrollhide');
  }
});





init();
