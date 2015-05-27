// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  	this.on("add", this.enqueue, this);
  	// listener for dequeue and ended
  	this.on("dequeue", this.dequeue, this);
  	this.on("ended", this.playNext, this);
  },

  enqueue: function () {
  	if ( this.length === 1) this.playFirst();
  },

  dequeue: function () {
  	this.remove(this.at(0));
  },

  playNext: function () {
  	// remove song that was playing (at index 0) from queue
  	this.dequeue();
  	if ( this.length > 0 ) this.playFirst();
  },

  playFirst: function () {
  	this.at(0).play();
  }

});