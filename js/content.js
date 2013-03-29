(function(document, window) {
	var clickevt,
			timer;
	var updateTimeline = true;

	var newLiveButton = document.createElement('a');
	newLiveButton.setAttribute('id','twithingy-live-button');
	newLiveButton.setAttribute('class','live'); // this takes the basic components from Twitter's CSS
	newLiveButton.innerHTML = 'Live stream';
	//document.getElementsByClassName('pull-right').appendChild(newLiveButton); /* esto no anda :( */

	/* JS DOM fixes */
	moveTweetBox();
	document.getElementById('global-nav-home').addEventListener("click", moveTweetBox, false);

	// Auto-refresh
	clickevt = document.createEvent('MouseEvents');
	clickevt.initEvent('click', true, true);

	var closeAllButton = document.getElementById('close-all-button');

	timer = setInterval(function() {
		/* Blocks automatic advance when a tweet/reply is expanded */
		updateTimeline = closeAllButton.style.display == 'none';
		
		if(updateTimeline) {
			var newtweets = document.getElementsByClassName("new-tweets-bar")[0];
			if(newtweets !== undefined) {
				newtweets.dispatchEvent(clickevt);

			}

		}

	}, 2000);
	
	
})(document, window);

/* Puts the Tweet box outside the dashboard */
function moveTweetBox() {
	/* home-tweet-box one line fix */
	document.getElementById('page-container').insertBefore(
		document.getElementsByClassName('home-tweet-box')[0],
		document.getElementsByClassName('dashboard')[0]
	);

}