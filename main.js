<<<<<<< HEAD
// Init Skrollr
var s = skrollr.init();

// Refresh Skrollr after resizing our sections
s.refresh($('body'));


var home = $('#home');
var proj = $('#proj');
var abme = $('#abme');
var cont = $('#cont');


home.on('click', function(event) {
  event.preventDefault();
  console.log("jjj");
  console.log("click");
  /* Act on the event */
  home.addClass('active');
  // $.scrollTo("#center", 500);
  $('html, body').animate({ scrollTop: 0 }, 800);
});


proj.on('click', function(event) {
  event.preventDefault();
  console.log("jjj");
  /* Act on the event */
  $('html, body').animate({
    scrollTop: $("#divForTheProjects").offset().top
  }, 800);
  // $.scrollTo("#divForTheProjects", 500);
  proj.addClass('active');
});


abme.on('click', function(event) {
  event.preventDefault();
  console.log("jjj");
  /* Act on the event */
  // $.scrollTo(".aboutme", 500);
  $('html, body').animate({
    scrollTop: $(".aboutme").offset().top - 50
  }, 800);
  abme.addClass('active');
});


cont.on('click', function(event) {
  event.preventDefault();
  console.log("jjj");
  /* Act on the event */
  cont.addClass('active');
  // $.scrollTo("#center", 500);
  $('html, body').animate({
    scrollTop: $(".contact").offset().top - 150
  }, 800);
});


var goDown = $('#view-projects');
var viewDem = $('#view-dem');
var toContact = $("#to-contact")

goDown.click(function(event) {
  /* Act on the event */
  // $.scrollTo("#divForTheProjects", 1000);
  $('html, body').animate({
    scrollTop: $("#divForTheProjects").offset().top - 23
  }, 500);
});

viewDem.click(function(event) {
  /* Act on the event */
  // $.scrollTo("#uj", 1000);
  $('html, body').animate({
    scrollTop: $("#nodeblog").offset().top - 100
  }, 500);
});

toContact.click(function(event) {
  /* Act on the event */
  // $.scrollTo("#divForTheProjects", 1000);
  $('html, body').animate({
    scrollTop: $(".contact").offset().top - 270
  }, 500);
=======
$(document).ready(function () {
  let firstPageEls = [
    ".hi", ".my-name", ".name", ".and-this", ".is-my", ".port"
  ];
  let firstPageWords = [
    "Hi!", "My name is", "Kristof Revilak", "and this", "is my", "portfolio"
  ]
  let firstPage = new TimelineMax();
  let controller = new ScrollMagic.Controller();
  let firstPageDissapear = new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      duration: "80%"
      })
      .setTween(TweenMax.staggerTo(".rott", 0.5, {scale: 0.8,opacity:0, delay:0.3, ease:Power1.easeOut, force3D:true})) 
      .addTo(controller);
  firstPageEls.forEach((el)=>{
    if(el == ".name"){
      firstPage.to(el,1,{text:{value:firstPageWords[0],delimeter:" "},opacity:1, color: "rgba(255, 0, 0, 0.5)", ease:Sine.easeOut});
    } else if(el == ".port"){
      firstPage.to(el,1,{text:{value:firstPageWords[0],delimeter:" "},opacity:1});
    } else{
      firstPage.to(el,1,{text:{value:firstPageWords[0],delimeter:" "},opacity:1});
      
    }
    firstPageWords.shift();
  });

  firstPage.to("#that-p",1, {opacity:1,right:"-2%"});
  firstPage.to(".social",1, {opacity:1,bottom:"5%"},"-=1.25");
  firstPage.to("header",1, {opacity:1,top:"10%"},"-=1");
  firstPage.to(".img",1.5, {opacity:1,bottom:"-100px"}, "-=0.75");
>>>>>>> 3efda3cf6b95635b77f6bfbd5d90dd566dcd94b5
});




  // var goDown = $('#view-projects');
  // var viewDem = $('#view-dem');
  // var toContact = $("#to-contact")

  // goDown.click(function(event) {
  //   /* Act on the event */
  //   // $.scrollTo("#divForTheProjects", 1000);
  //   $('html, body').animate({
  //     scrollTop: $("#divForTheProjects").offset().top - 23
  //   }, 500);
  // });

  // viewDem.click(function(event) {
  //   /* Act on the event */
  //   // $.scrollTo("#uj", 1000);
  //   $('html, body').animate({
  //     scrollTop: $("#nodeblog").offset().top - 100
  //   }, 500);
  // });

  // toContact.click(function(event) {
  //   /* Act on the event */
  //   // $.scrollTo("#divForTheProjects", 1000);
  //   $('html, body').animate({
  //     scrollTop: $(".contact").offset().top - 270
  //   }, 500);
  // });

  $("#tribute").click(function(event) {
    /* Act on the event */
    window.open("tribute/index.html")
  });

  $("#nodeblog").click(function(event) {
    /* Act on the event */
    window.open("quotemachine/index.html")
  });


  // $('.space').bind('inview', function(event, isInView) {
  //   if (isInView) {
  //       $(".social").animate({
  //         "right": "33vw",
  //         "font-size": "4vw",
  //         "display": "block"},
  //         250, function() {
  //         /* stuff to do after animation is complete */
  //       });
  //   } else {
  //     $(".social").animate({
  //       "right": "1.99%",
  //       "font-size": "1vw",
  //       "padding-right": "2%"},
  //       150, function() {
  //       /* stuff to do after animation is complete */
  //     });
  //   }
  // });
// });




// $(window).on('load', function() {
  // var colors = ["#FDA69A", "#E69B98", "#FD6F88", "#E665A3", "#FD7CE1"];
  // var curCol = 0,
  // timer = setInterval(function () {
  //     if (curCol === colors.length) curCol = 0;
  //     $('#center').css("color", colors[curCol]);
  //     curCol++;
  // }, 1000);
  // Init Skrollr
  // $(".first-view").css({'display':'block',"opacity":"0"});
  
  // $(".first-view").hide().animate({
  //   opacity: "0",
  //   display: "block",
  // },slow)



// });

// $(window).scroll((e)=>{
//   e.preventDefault();
// });

