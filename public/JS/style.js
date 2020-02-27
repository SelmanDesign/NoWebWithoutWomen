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
      console.log(bgcolor());
    }
}

$(".titlecard").click(function(){
  var title = $(this).children(':nth-child(4)');
  var ex = $(this).children(':nth-child(1)');
  var name = $(this).children(':nth-child(3)').children()
  var core = $('.infocard');
  if(title.hasClass('showcard')) {
    $('.infocard').removeClass("showcard");
    $('.expand').removeClass("rota");
    $('.invention').removeClass("name");
  } else {
    $('.infocard').removeClass("showcard");
    $('.expand').removeClass("rota");
    $('.invention').removeClass("name");
    title.toggleClass("showcard");
    ex.toggleClass("rota");
    name.toggleClass("name");
  }
});

$(document).ready(function() {
  $(window).scroll(function() {
    if($(window).scrollTop() > 30) {
      $('.headl').addClass('small');
      $('.bodygrid').css("margin-top","30vh");
      $('.heightcomp').css("height","auto");
      $('.defaulp').css("display","none");
      $('.headlinehold').css("margin","0");
    } else {
      $('.headl').removeClass('small');
      $('.heightcomp').css("height","80vh");
      $('.bodygrid').css("margin-top","81vh");
      $('.defaulp').css("display","block");
      $('.headlinehold').css("margin","auto");
    }
  });
});


init();
