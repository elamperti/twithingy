// Detect twitter.com...
// TODO try to detect the homepage only ;)
chrome.webNavigation.onCompleted.addListener(
	function(details) {
		chrome.pageAction.show(details.tabId);
	}, 
	{url: [{hostSuffix: 'twitter.com'}]}
);
