var num = 0;

$("body").ready(function() {
  $("#quoteDiv").animate( {  opacity:0   },40 );
  newquote();
  $("#quoteDiv").delay(500).animate( {  opacity:1   },400 );
});

$("#quoteBtn").on("click", function(){
  $("#quoteDiv").animate( {  opacity:0  },500 );
  newquote();
  $("#quoteDiv").delay(400).animate( {  opacity:1   },500 );
});


function mycallback(data){

  var content = JSON.stringify(data[0].content);
  content = content.slice(1,content.length-3);

  var author = JSON.stringify(data[0].title);
  author = "-" + author.slice(1,author.length-1);


  $("#quoteText").html(content);
  $("#quoteAuthor").html(author);


  if (content.length >= 400) {
    $("#quoteText").css( {  fontSize: '1.6vw', letterSpacing: '.16vw', marginBottom: '2vw'  } );
    $("#quoteAuthor").css( {  fontSize: '1.1vw', letterSpacing: '.05vw'  } );
  }
  else if(content.length >= 250){
    $("#quoteText").css( {  fontSize: '1.8vw', letterSpacing: '.18vw', marginBottom: '4vw'  } );
    $("#quoteAuthor").css( {  fontSize: '1.3vw', letterSpacing: '.1vw'  } );
  }
  else{
    $("#quoteText").css( {  fontSize: '2vw', letterSpacing: '.2vw', marginBottom: '6vw'  } );
    $("#quoteAuthor").css( {  fontSize: '1.5vw', letterSpacing: '.2vw'  } );
  }

  console.log(data[0].content);
}

function newquote(){

  var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand+"+num+"&filter[posts_per_page]=1&_jsonp=mycallback";

  $.ajax({
    url: url,

    type: "GET",

    dataType: 'jsonp',

    cache: true,

    data: {
      format: "jsonp"
    },

  });

  parseInt(num);
  num = Math.ceil(Math.random()*100);
  num = num.toString();
}
