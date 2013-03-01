(function(document, window) {
	var clickevt,
		timer;
	var updateTimeline = true;

	var newLiveButton = document.createElement('a');
	newLiveButton.setAttribute('id','twithingy-live-button');
	newLiveButton.setAttribute('class','live'); // this takes the basic components from Twitter's CSS
	newLiveButton.innerHTML = 'Live stream';
	//document.getElementsByClassName('pull-right').appendChild(newLiveButton); /* esto no anda :( */

	clickevt = document.createEvent('MouseEvents');
	clickevt.initEvent('click', true, true);

	timer = setInterval(function() {
		var newtweets = document.getElementsByClassName("new-tweets-bar")[0];

		if(/*updateTimeline OR */newtweets !== undefined) {
			newtweets.dispatchEvent(clickevt);

		}

	}, 2000);
	
})(document, window);