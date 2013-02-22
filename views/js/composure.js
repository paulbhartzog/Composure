$(document).ready(function(){

	// jquery includes
	$(".jquery-include").each(function(){
	    var inc = $(this);
	    $.get(inc.attr("src"), function(data){
	        inc.html(data);
	    });
	});

	$(document).on('click', '#remote', function(){
		var uri = "http://199.101.227.188:8080/whatever/the/hell/I/want";
		$.get(uri, function(result){
			$("#results").html(result);
		});
	});

});
