(function(document, window) {
	var clickevt,
			timer;

	clickevt = document.createEvent('MouseEvents');
	clickevt.initEvent('click', true, true);

	timer = setInterval(function() {
		var newtweets = document.getElementsByClassName("new-tweets-bar")[0];

		if(newtweets !== undefined) {
			newtweets.dispatchEvent(clickevt);

		}

	}, 2000);
	
})(document, window);