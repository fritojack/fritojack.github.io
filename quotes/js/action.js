$(document).ready(function(val){
    var quote = "Youhoo";

    $(".quote-do").on("click",function(){
	var html = ""
	$.ajax({
	    url: "http://api.forismatic.com/api/1.0/?",
	    dataType: 'jsonp',
	    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
	    success: function(data){
		quote = data.quoteText + " " + data.quoteAuthor;
		html = data.quoteText + "<br>" + data.quoteAuthor;
		$(".quote-go-here").html(html);
	    }
	});

    });
    
    $(".twitter").on("click",function(){
	var textToTweet = quote;
	var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textToTweet);
	$(".twitter").attr('href',tweetLink).click();

    });
    

});
