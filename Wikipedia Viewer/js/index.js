function search(){
  var input=document.getElementById("search-input");
  $("#icons").html("<i class='fa fa-search icon' onclick='search()'></i>");
  var api= "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=max&format=json&exsentences=1&exintro=&explaintext=&generator=search&gsrlimit=10&gsrsearch=";
  
  
  var link=api+input.value;
  var html = "";
  var wikilink = 'http://en.wikipedia.org/?curid=';
  
    $.ajax({
      url:link,
      type:"get",
      dataType:"JSONP",
      success:function(data){
        var results = data.query.pages;
        var pgs = Object.keys(results);
        pgs.forEach(function(page){
          var title = results[page].title;
          var text = results[page].extract;
          var pagelink = wikilink+results[page].pageid;
          
          html+="<div class='result'><div class='title'><a href='"+pagelink+"' class='titleLink' target='_blank'>"+title+"</a></div><div class='desc'>"+text+"</div></div>";
          
        });
        
        $("#result").html(html);
      },
      error:function(x,s,e){
        alert(s);
      }
    });
  
    $("#result").addClass("displayResults");
    $("#main").removeClass("topPad");
  
}