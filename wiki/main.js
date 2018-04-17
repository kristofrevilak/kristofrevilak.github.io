var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|info&generator=allpages&exsentences=1&exintro=1&explaintext=1&exsectionformat=plain&inprop=url&gapfrom=";
var end = "&gapnamespace=0&gapfilterredir=nonredirects&gaplimit=10&callback=?";

$(document).keypress(function(e) {
    if(e.which == 13) {
        var title = $("#lame").val();
        console.log(title);
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
});



function showData(result){
  $(".results").html("");
  console.log(result.query.pages);
  var pages = result.query.pages;
  $.each(pages, function (i,item) {
    $(".results").append("<section><h1>" + item.title + "</h1>" + "<p>" + item.extract + "</p>" + "<a href='" + item.fullurl + "' target='_blank'>click here for more</a></section>");
  })
}
