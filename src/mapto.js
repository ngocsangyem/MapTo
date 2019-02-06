// This template from gomakethings.com

/* Determine what type of environment 
 * it's working in and ptovide the right kind of header accordingly 
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['buoy'], factory(root));
	} else if (typeof exports === 'object') {
		module.exports = factory(require('buoy'));
	} else {
		root.mapTo = factory(root, root.buoy);
	}
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {

	'use strict';
	//
	// Variables
	//

	var mapTo = {}; // Object for public APIs
	var supports = !!document.querySelector && !!root.addEventListener; // Feature test
	var settings; // Placeholder variables

	// Default settings
	var defaults = {
		selector: '',
		type: null,
		callback: function () {}
	};


	//
	// Methods
	//

	// @todo add plugin methods here
	var getSelector = function (){
		
	}
	var getViewportWidth = function (){

	}
	/**
	 * Handle events
	 * @private
	 */
	var eventHandler = function (event) {
		// @todo Do something on event
	};
});