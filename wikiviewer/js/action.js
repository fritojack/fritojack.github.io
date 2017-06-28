
$(document).ready(function(){
    $(".query").on("click",function(data){
	window.open("https://en.wikipedia.org/wiki/Special:Random",'_blank');
    });

    $(document).keypress(function(e){
	if (e.which == 13){
	    var bla = $(".inputhere").val();
	    var posit = "https://en.wikipedia.org/w/api.php?action=query&titles=" + encodeURIComponent(bla) + "&prop=revisions&rvprop=content&format=json";
	 
	    $.ajax({
		url: posit,
		dataType: 'jsonp',
		success: function(data){
		    var foo = data.query.pages;
		    var ky = Object.keys(data.query.pages);
		    var tit = foo[ky[0]].title;
		    var rev = foo[ky[0]].revisions;
		    var poochee = Object.keys(rev);
		    var margee = rev[poochee[0]]["*"];
		    $(".explain").html(tit+"<br>"+margee);
		}
	    });
	}
    });
});
