// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },

  play: function(){
  	this.trigger('play', this);
  },

  ended: function(){
  	this.trigger('ended', this);
  },

  dequeue: function(){
  	this.trigger('dequeue', this);
  }

});
