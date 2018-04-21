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
    if(current == "" || !current || current == " " ){
      let show = new TimelineMax();
      show.to("header",1,{top: "50%"});
    }
    var charStr = String.fromCharCode(charCode);
    $('#lame').val(current + charStr);
    var title = $("#lame").val();
    console.log(title);
    callData(title);
  }
});

$(document).keydown((e)=>{
  let current = $('#lame').val(); 
  evt = e || window.event;
  var charCode = evt.keyCode || evt.which;
  
  if(charCode == 8){
    $('#lame').val(current.substr(0,current.length -1));
    var title = $("#lame").val();
    console.log(title);
    if($('#lame').val() == "" || !$('#lame').val() || $('#lame').val() == " "){
      $(".results").empty();
      let show = new TimelineMax();
      show.to("header",1,{top: "30%"});
    } else {
      callData(title);
    }
   
  }
});

$(document).ready((e)=>{
  let init = new TimelineMax();
  let loop = new TimelineMax({onComplete:function() {
    this.restart()}
  });
  $("#lame").val("");
  $(".results").empty();
  init.to("header",1,{opacity:1,left:"5%",ease:SlowMo.easeIn});
  // let footer = CSSRulePlugin.getRule(".footer:before")
  init.to(".pseudo",1.5,{opacity:1,bottom:"2%", width:"0%", color: "black",ease:SlowMo.easeIn});
  loop.to(".change", 1.5,{opacity:0,top: -20,ease:SlowMo.easeOut, delay:3})
      .add(()=>{
        if($(".change").html() == "culture"){
          $(".change").html("");
          TweenMax.to(".change",1,{text:{value:"art",delimeter:" "}, color:"pink", ease:Sine.easeIn});
         
        } else if($(".change").html() == "art") {
          $(".change").html("");
          TweenMax.to(".change",1,{text:{value:"history",delimeter:" "}, color:"yellow", ease:Sine.easeIn});
          // $(".change").html("culture");
        } else if($(".change").html() == "history") {
          $(".change").html("");
          TweenMax.to(".change",1,{text:{value:"world",delimeter:" "},color:"blue", ease:Sine.easeIn});
          // $(".change").html("culture");
        } else {
          $(".change").html("");
          TweenMax.to(".change",1,{text:{value:"culture",delimeter:" "},color:"green", ease:Sine.easeIn});
        }
        
      });
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
