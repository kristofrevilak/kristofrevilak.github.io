var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|info&generator=allpages&exsentences=1&exintro=1&explaintext=1&exsectionformat=plain&inprop=url&gapfrom=";
var end = "&gapnamespace=0&gapfilterredir=nonredirects&gaplimit=10&callback=?";

$(document).keypress(function(e) {
  let current = $('#lame').val(); 
  evt = e || window.event;
  var charCode = evt.keyCode || evt.which;

  if(charCode == 82){
    // ALERT RANDOM, TYPE ANOTHER CHAR TO ABORT OR COUNTDOWN TO RANDOM
    // window.open("https://en.wikipedia.org/wiki/Special:Random");
  }
  if(charCode == 73){

  }
  else {
    
    var charStr = String.fromCharCode(charCode);
    $('#lame').val(current + charStr);
    var title = $("#lame").val();
    console.log(title);
    callData(title);
  }
});

$(document).keydown((e)=>{
  let appear = false;
  let current = $('#lame').val(); 
  evt = e || window.event;
  var charCode = evt.keyCode || evt.which;
  if(current == "" || !current || current == " " ){
    appear = true;
  }
  if(charCode == 8){
    appear = false;
    $('#lame').val(current.substr(0,current.length -1));
    var title = $("#lame").val();
    console.log(title);
    if($('#lame').val() == "" || !$('#lame').val() || $('#lame').val() == " "){
      console.log("xdd");
      $(".results").empty();
    } else {
      callData(title);
    }
   
  }
});

$(document).ready((e)=>{
  $("#lame").val("");
  $(".results").empty();
  TweenMax.to("header",1,{opacity:1,left:"5%",ease:SlowMo.easeIn});
  // let footer = CSSRulePlugin.getRule(".footer:before")
  TweenMax.to(".pseudo",1.5,{opacity:1,bottom:"2%", width:"0%", color: "black",ease:SlowMo.easeIn, delay:1.7});
});



function callData(title){
  $.ajax({
    url: url + title + end,

    type: "POST",

    dataType: 'json',

    cache: true,

    data: {
      format: "json"
    },
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: showData
  });
}

function showData(result){
  $(".results").html("");
  var pages = result.query.pages;
  $.each(pages, function (i,item) {
    $(".results").append("<section><h1>" + item.title + "</h1>" + "<p>" + item.extract + "</p>" + "<a href='" + item.fullurl + "' target='_blank'>click here for more</a></section>");
  })
}
