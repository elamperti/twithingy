/**
  Boot
 */
var options = {
		composefix: localStorage['twithingy_composefix'] !== undefined 
			? localStorage['twithingy_composefix'] : "1",
		tlrefresh: localStorage['twithingy_tlrefresh'] !== undefined 
			? localStorage['twithingy_tlrefresh'] : "1"
	},
	tlrefreshtimer = null;


/**
  --------------------------------
                                 |
 	DOM IS READY!							     |
                                 |
 	--------------------------------
 */
applyComposefix();
// added by @elamperti
document.getElementById('global-nav-home').addEventListener("click", applyComposefix, false);

if(options.tlrefresh === "1") {
	installTLrefresh();
	installLiveStreamButton();
	
}


/**
  --------------------------------
                                 |
 	UI/UX fixes functions			     |
                                 |
 	--------------------------------
 */
function installLiveStreamButton() {
	var lsbutton = document.createElement('a'),
			target = document.getElementsByClassName('pull-right')[0];
		
	lsbutton.setAttribute('id', 'twithingy-live-button');
	// this takes the basic components from Twitter's CSS
	lsbutton.setAttribute('class', 'live');
	lsbutton.innerHTML = 'Live stream';
	
	if(target) {
		target.appendChild(lsbutton);
		lsbutton.addEventListener("click", soon, false);
	}
	console.log("live stream button installed");

};

function applyComposefix() {
	var elm;

	if(options['composefix'] === "1") {
		/* Puts the Tweet box outside the dashboard */	
		/* home-tweet-box one line fix */
		try {
			document.getElementById('page-container').insertBefore(
				document.getElementsByClassName('home-tweet-box')[0],
				document.getElementsByClassName('dashboard')[0]
			);
		} catch(e) {};

	} else {
		elm = document.getElementsByClassName('home-tweet-box')[0];
		elm.parentNode.removeChild(elm);

	}
	console.log("compose fix applied");

}

function installTLrefresh() {
	tlrefreshtimer = setInterval(function() {
		var	evt,
				closeall = document.getElementById('close-all-button'),
				tweetexpanded = false,
				newtweets = document.getElementsByClassName("new-tweets-bar")[0];

		if(closeall) {
			tweetexpanded = (closeall.style.display == 'inline');
			
		}
		evt = document.createEvent('MouseEvents');
		evt.initEvent('click', true, true);
		if(newtweets && !tweetexpanded) {
			newtweets.dispatchEvent(evt);

		}
		if(tweetexpanded) {
			console.log("tweet expanded!");
		}
			
	}, 2000);
	console.log("tl refresh installed");

};

function uninstallTLrefresh() {
	clearTimeout(tlrefreshtimer);
	tlrefreshtimer = null;

};


/**
  --------------------------------
                                 |
 	CALLBACKS									     |
                                 |
 	--------------------------------
 */
function soon() {
	alert('Soon...');

};


/**
  --------------------------------
                                 |
 	GET OPTIONS FROM BACKGROUND    |
                                 |
 	--------------------------------
 */
chrome.runtime.sendMessage(
	{method: 'getBoolOptions', keys: ['composefix', 'tlrefresh']}, 
	function(response) {
		var i;
		
		for(i in response.data) {
			if(response.data.hasOwnProperty(i)) {
				if(options[i] !== undefined) {
					options[i] = response.data[i];
					localStorage['twithingy_' + i] = options[i];

				}

			}
	
		}

	}
);