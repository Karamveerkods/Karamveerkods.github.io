const cards = document.querySelectorAll('.card3D');

function transition() {
  if (this.classList.contains('cardIsActive')) {
    this.classList.remove('cardIsActive')
  } else {
    this.classList.add('cardIsActive');
  }
}

cards.forEach(card => card.addEventListener('click', transition));
 
var timerId = setInterval(function() {
  if($("#page").hasClass("bg-day")){
    $("#page").removeClass("bg-day");
    $("#page").fadeIn(3000);
    $("#page").addClass("bg-night");


     
  }else if($("#page").hasClass("bg-night")){
    $("#page").removeClass("bg-night");
    $("#page").fadeIn(3000);
    $("#page").addClass("bg-day");

  }
}, 2000);
