const init = function(){
    let items = $('li');
    for (let i = 0; i < items.length; i++){
      var back = ["#FA89FF","#97FF89","#C3EAF5","#ADB0FA","#E6E6E2","#BFD6D3","#BFC6D6","#C3D6BF","#FFAAAA","#AAFFE2","#F2F4BA","#67FFAD","#FFD067"];
      var rand = back[Math.floor(Math.random() * back.length)];
      items[i].style.background = rand;
    }
}

$(".titlecard").click(function(){
  $(this).children(':nth-child(4)').toggleClass("showcard");
  $(this).children(':nth-child(1)').toggleClass("rota");
  $(this).children(':nth-child(3)').children().toggleClass("name");
  $(this).children(':nth-child(3)').children().children().toggleClass("noname");
});

$(document).ready(function() {
  $(window).scroll(function() {
    if($(window).scrollTop() > 0) {
      $('.headl').addClass('small');
      $('.bodygrid').css("margin-top","120px");
      $('.heightcomp').css("height","auto");
      $('.defaulp').css("display","none");
      $('.headlinehold').css("margin","0");
    } else {
      $('.headl').removeClass('small');
      $('.heightcomp').css("height","80vh");
      $('.bodygrid').css("margin-top","81vh");
      $('.defaulp').css("display","block");
      $('.headlinehold').css("margin","auto");
      console.log("hello world");
    }
  });
});


init();
