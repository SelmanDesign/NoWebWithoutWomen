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

var bgcolor = randomNoRepeats(["#ff867c","#ff77a9","#df78ef","#b085f5","#8e99f3","#80d6ff","#73e8ff","#6ff9ff","#64d8cb","#98ee99","#cfff95","#ffff89","#d4e157","#ffee58","#ffca28","#ffa726","#ff7043","#ef5350","#ec407a","#42a5f5","#29b6f6","#26c6da"]);

const init = function(){
    let items = $('li');
    for (let i = 0; i < items.length; i++){
      items[i].style.background = bgcolor();
    }
}

$(".invention").click(function(){
  var title = $(this).siblings(".infoexpansion");
  var ex = $(this).parent().parent().parent().siblings(".expand");
  var name = $(this).children();
  var pic = $(this).parent().siblings(".inforight");
  var core = $('.infoexpansion');
  $('.infoexpansion').removeClass("showcard");
  $('.expand').removeClass("rota");
  $('.invention').removeClass("name");
  $('.inforight').removeClass("inforightshow");
  title.toggleClass("showcard");
  ex.toggleClass("rota");
  name.toggleClass("name");
  pic.toggleClass("inforightshow");
});

$(".expand").click(function(){
  var title = $(this).siblings(".infocard").children(".infobridge").children(".infoleft").children(".infoexpansion");
  var ex = $(this);
  var name = $(this).siblings(".infocard").children(".infobridge").children(".infoleft").children(".invention").children();
  var pic = $(this).siblings(".infocard").children(".infobridge").children(".inforight");
  var core = $('.infoexpansion');
  if($(this).hasClass("rota")) {
    $('.infoexpansion').removeClass("showcard");
    $('.expand').removeClass("rota");
    $('.invention').removeClass("name");
    $('.inforight').removeClass("inforightshow");
  } else {
    $('.infoexpansion').removeClass("showcard");
    $('.expand').removeClass("rota");
    $('.invention').removeClass("name");
    $('.inforight').removeClass("inforightshow");
    title.toggleClass("showcard");
    ex.toggleClass("rota");
    name.toggleClass("name");
    pic.toggleClass("inforightshow");
  }
});

$(document).ready(function() {
  $(window).scroll(function() {
    if($(window).scrollTop() > 30) {
      $('#one').removeClass("onean");
      $('.headl').addClass('small');
      $('.bodygrid').css("margin-top","30vh");
      $('.heightcomp').css("height","auto");
      $('.defaulp').css("display","none");
      $('.headlinehold').css("margin","0");
      $('#one').html("w");
      $('#one').addClass("onean");
      $('#two').html("w");
      $('#two').addClass("twoan");
      $('#three').html("w");
      $('#three').addClass("threean");
      $('.collapse').css("display","none");
    } else {
      $('#one').removeClass("onean");
      $('.headl').removeClass('small');
      $('.heightcomp').css("height","80vh");
      $('.bodygrid').css("margin-top","81vh");
      $('.defaulp').css("display","block");
      $('.headlinehold').css("margin","auto");
      $('#one').html("w");
      $('#one').addClass("onean");
      $('#two').html("e");
      $('#two').addClass("twoan");
      $('#three').html("b");
      $('#three').addClass("threean");
      $('.collapse').css("display","block");
    }
  });
});

init();
