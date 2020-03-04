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

$(".invention").click(function(){
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

/*toggles dropdown from the plus sign*/

$(".expand").click(function(){
  var title = $(this).siblings(".infocard").children(".infobridge").children(".infoleft").children(".infoexpansion");
  var ex = $(this);
  var name = $(this).siblings(".infocard").children(".infobridge").children(".infoleft").children(".invention").children().children(".strike");
  var pic = $(this).siblings(".infocard").children(".infobridge").children(".inforight");
  var core = $('.infoexpansion');
  if($(this).hasClass("rota")) {
    $('.infoexpansion').removeClass("showcard");
    $('.expand').removeClass("rota");
    $('.strike').removeClass("name");
    $('.inforight').removeClass("inforightshow");
  } else {
    $('.infoexpansion').removeClass("showcard");
    $('.expand').removeClass("rota");
    $('.strike').removeClass("name");
    $('.inforight').removeClass("inforightshow");
    title.toggleClass("showcard");
    ex.toggleClass("rota");
    name.toggleClass("name");
    pic.toggleClass("inforightshow");
  }
});

/*variable navbar functions*/

function expandednav() {
  $('#item0').removeClass('animater');
  $('.headl').removeClass('small');
  $('.heightcomp').css("height","80vh");
  $('.defaulp').css("display","block");
  $('.headlinehold').css("margin-left","17.5vw");
  $('.headlinehold').css("margin-top","5vh");
  $('.headlinehold').css("margin-bottom","5vh");
  $('.holdspace').css("width","55vw");
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
  $('.headlinehold').css("margin-left","0");
  $('.headlinehold').css("margin-top","12px");
  $('.headlinehold').css("margin-bottom","12px");
  $('.holdspace').css("width","70px");
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
  if (wS <= 100)  {
    expandednav();
    $(".bodygrid").css("margin-top",wD);
  } else {
    smallnav();
    $(".bodygrid").css("margin-top","400px");
  }
});


$(window).scroll(function() {
  var zip = $(window).scrollTop(),
      wS =$(this).scrollTop(),
      hH = $('.navbar').outerHeight(),
      wD = (hH+wS);
  if (wS <= 100)  {
    expandednav();
    $(".bodygrid").css("margin-top",wD);
  } else {
    smallnav();
    $(".bodygrid").css("margin-top","200px");
  }
});



init();
