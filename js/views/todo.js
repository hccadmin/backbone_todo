var app = app || {};

app.TodoView = Backbone.View.extend({

	tagName: 'li',

	template: _.template( $('#item-template').html() ),

	events: {
		'dblclick label' : 'edit',
		'keypress .edit' : 'updateOnEnter',
		'blur .edit' : 'close'
	},

	initialize: function() {},

	render: function() {},

	edit: function() {},

	close: function() {},

	updateOnEnter: function() {}
	
});
