var scrolltime = 0;
hljs.tabReplace = '    ';
hljs.initHighlightingOnLoad();
var AppClass = Backbone.Router.extend({
	routes: {
		'*section': '_default'
	},
	_default: function(section){
		section = section.replace(/^_/, '')
			.replace(/_$/, '')
			.replace(/\//g, '-');
		console.log('#'+section);
		console.log($('#'+section));
		$.scrollTo('#'+section, scrolltime, {offset: {top: -15}});
		scrolltime = 500;
	}
});

var App = new AppClass();

$(function(){
	Backbone.history.start({
		pushState: false
	});
});