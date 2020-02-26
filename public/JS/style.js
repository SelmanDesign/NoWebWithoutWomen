const init = function(){
    let items = $('li');
    for (let i = 0; i < items.length; i++){
      var back = ["#ff0000","#FFB803","#DC03FF","#03FFFF","#90FF03","FF7C03","#FFB803","#0359FF","#E4E4E4","#03D2FF","#427B52","#413D42","#6D1995","#207FA8","#72FF03","#EFC5F5"];
      var rand = back[Math.floor(Math.random() * back.length)];
      items[i].style.background = rand;
    }
}

$(".titlecard").click(function(){
  $(this).children(':nth-child(4)').toggleClass("showcard");
  $(this).children(':nth-child(1)').toggleClass("rota");
  $(this).children(':nth-child(3)').children().toggleClass("name");
});

$("#base").click(function(){
  $('h2').css("font-family","base-9-sans");
  $('h2').css("font-weight","200");
  $('.infoparagraph').css("font-family","base-12-serif");
  $('.infoparagraph').css("font-size","14px");
  $('.infoparagraph').css("line-height","150%");
});

$("#co").click(function(){
  $('h2').css("font-family","cofosandsreg");
  $('.infoparagraph').css("font-family","cofosandsreg")
});

$(document).ready(function() {
  $(window).scroll(function() {
    if($(window).scrollTop() > 0) {
      $('.headl').addClass('small');
      $('.bodygrid').css("margin-top","120px");
    } else {
      $('.headl').removeClass('small');
      $('.bodygrid').css("margin-top","230px");
      console.log("hello world");
    }
  });
});


init();
