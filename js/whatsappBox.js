
$('.chat_fullscreen_loader').css('display', 'none');

$('#prime').click(function() {
  toggleFab();
});


//Toggle chat and links
function toggleFab() {

  $('#prime').toggleClass('is-float');
  $('.chat').toggleClass('is-visible');
  $('.fab').toggleClass('is-visible');  
}

  $('#chat_first_screen').click(function(e) {
    $('.chat_fullscreen_loader').css('display', 'none');
  });


  $('#chat_fullscreen_loader').click(function(e) {
      $('.chat').toggleClass('chat_fullscreen');
      $('.fab').toggleClass('is-hide');
   
  });


