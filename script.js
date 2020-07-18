var toggle = document.getElementById('toggle');
var container = document.querySelector('.container');
containerList = container.classList;
var card = document.querySelectorAll('.card');
var h1 = document.getElementsByTagName('h1');
var h2 = document.getElementsByTagName('h2');
var span = document.getElementsByTagName('span');
var today = document.querySelectorAll('.today');

console.log(today)

var isWhite = false;

//STYLING TODAY
function todaySpan(){
  today.forEach((ele)=>{
      ele.style.color = 'hsl(163deg 95% 36%)';
  })
}
// STYLING SPAN

function textSpan(){
  [...span].forEach((ele)=>{
    if (isWhite)
      ele.style.color = 'hsl(228, 12%, 44%)';
    else
      ele.style.color = 'hsl(231deg 17% 43%)';

  })
}
//STYLING TEXT for h1
function texth1(){
  [...h1].forEach((ele)=>{
    if (isWhite)
      ele.style.color = 'hsl(0, 0%, 100%)';
    else
      ele.style.color = 'hsl(230, 17%, 14%)';

  })
}

//STYLING TEXT for h2
function texth2(){
  [...h2].forEach((ele)=>{
    if (isWhite)
      ele.style.color = 'hsl(0, 0%, 100%)';
    else
      ele.style.color = 'hsl(230, 17%, 14%)';

  })
}


// STYLING CARD 
function lightCard(){
  card.forEach((ele,index)=>{
    if (isWhite)
      ele.style.background = 'hsl(228, 28%, 20%)';
    else
      ele.style.background = "hsl(227, 47%, 96%)";
  });
}

// CHANGING THE BACKGROUND LIGHT/DARK
toggle.addEventListener("click",function(){
    textSpan();
    todaySpan()
    lightCard();
    texth1();
    texth2();
    
    if (isWhite){
      container.classList.remove('light_container');
      isWhite = false;
    }
    else{
      container.classList.add('light_container');
      isWhite = true;
    }
});

