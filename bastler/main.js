$(function(){
  $("#menu").click( function(){
    $(".nav-menu-mobile").fadeIn('slow', function() {});
  });
  $(".exit").click(function() {
    $(".nav-menu-mobile").fadeOut('slow', function() {});
  });
  $(".exit").hover(function() {
    console.log("kiko");
    $(".exit").animate({borderColor: 'white',color: 'white'},200,function(){});
  }, function() {
    $(".exit").animate({borderColor: 'black',color: 'black'},200,function(){});
  });
})
