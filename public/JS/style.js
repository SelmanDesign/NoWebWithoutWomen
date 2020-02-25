const init = function(){
    let items = document.querySelectorAll('li');
    for (let i = 0; i < items.length; i++){
      var back = ["#ff0000","#FFB803","#DC03FF","#03FFFF","#90FF03","FF7C03","#FFB803","#0359FF","#E4E4E4","#03D2FF","#427B52","#413D42","#6D1995","#207FA8","#72FF03","#EFC5F5"];
      var rand = back[Math.floor(Math.random() * back.length)];
      items[i].style.background = rand;
    }

    cssScrollSnapPolyfill()
}

init();
