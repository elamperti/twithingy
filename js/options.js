/**
	Options page js
*/
(function(document, storage) {
	var restoreOptions,
			saveOptions;

	/**
	 * Load
	 * @param {DOM Event} evt
	 */
	restoreOptions = function(evt) {
		var i,
				elm,
				boolopts;
		
		boolopts = document.querySelectorAll(".bool-options input");
		for(i = 0; i < boolopts.length; i++) {
 			elm = boolopts[i];
			elm.checked = storage[elm.name] === "1";

		}

	};

	/**
	 * Save
	 * @param {DOM Event} evt
	 */
	saveOptions = function(evt) {
		var i,
				elm,
				boolopts,
				status;
		
		boolopts = document.querySelectorAll(".bool-options input");
		for(i = 0; i < boolopts.length; i++) {
 			elm = boolopts[i];
			storage.setItem(elm.name, elm.checked ? "1" : "0");

		}

		// Status -> user
		status = document.getElementById("status");
		status.innerHTML = "Options Saved.";
		setTimeout(function() {
			status.innerHTML = "";
		}, 750);

	};

	document.addEventListener('DOMContentLoaded', restoreOptions);
	document.querySelector('[name=save]').addEventListener('click', saveOptions);

})(document, window.localStorage);