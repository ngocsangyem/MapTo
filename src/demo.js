var MapTo = {
	selector: '',
	type: '',
	responsive: '992',
	getElement: function(el) {
		return MapTo.selector = document.querySelector(el);
	},
	getViewportWidth: () => {
		return window.matchMedia('(min-width: '+ MapTo.responsive +' px)').matches
	}
};

MapTo.getElement('.box')
MapTo.getViewportWidth()
console.log(MapTo.responsive);

