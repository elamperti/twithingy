// Detect twitter.com...
// TODO try to detect the homepage only ;)
chrome.webNavigation.onCompleted.addListener(
	function(details) {
		chrome.pageAction.show(details.tabId);

		/*chrome.tabs.executeScript(details.tabId, {
			file: "js/fixes/tweetbar-fix.js"
		});*/

	}, 
	{
		url: [
			{ hostEquals: 'www.twitter.com' },
			{ hostEquals: 'twitter.com' }
		]
	}
);


/**
  --------------------------------
                                 |
 	MESSAGES FROM CONTENT			     |
                                 |
 	--------------------------------
 */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var i,
			data = {};
	
	if(request.method == "getBoolOptions") {
		for(i = 0; i < request.keys.length; i++) {
			if(localStorage[request.keys[i]] === undefined) {
				localStorage.setItem(request.keys[i], "1");

			}
			data[request.keys[i]] = localStorage[request.keys[i]];
		}
		sendResponse({data: data});

	} else {
		sendResponse({});

	}
});