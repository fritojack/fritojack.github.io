$(document).ready(function(val){
    $(".quote-do").on("click",function(){
	var html = ""
	$.ajax({
	    url: "http://api.forismatic.com/api/1.0/?",
	    dataType: 'jsonp',
	    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
	    success: function(data){
		html = data.quoteText + "<br>" + data.quoteAuthor;
	$(".quote-go-here").html(html);
	    }
	});


    });
});
