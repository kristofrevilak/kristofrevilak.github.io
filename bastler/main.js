$(function(){
  $("#menu").click( function(){
    $(".nav-menu-mobile").fadeIn('slow', function() {});
  });
  $(".exit").click(function() {
    $(".nav-menu-mobile").fadeOut('slow', function() {});
  });
  $(".exit").hover(function() {
    $(".exit").animate({borderColor: 'white',color: 'white'},200,function(){});
  }, function() {
    $(".exit").animate({borderColor: 'black',color: 'black'},200,function(){});
  });
  $(".main-section-see-more").click(function() {
    console.log("kiko");
    $('html, body').animate({
      scrollTop: $("#see-more").offset().top
    }, 800);
  });
  $(".main-section-see-more").hover(function() {
    $(".fa-arrow-down").animate({top:"10px"},200,function(){});
  }, function() {
    $(".fa-arrow-down").animate({top:"0px"},200,function(){});
  });
  $(".side-section-see-more").hover(function() {
    $(".fa-bullseye").animate({width:"10px"},200,function(){});
  }, function() {
    $(".fa-bullseye").animate({width:"0px"},200,function(){});
  });
})
