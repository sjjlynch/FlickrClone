FlickrClone.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.photos = new FlickrClone.Collections.Photos();
    this.galleries = new FlickrClone.Collections.Galleries();
  },

  routes: {
    "" : "photoindex",
    "photos" : "photoindex",
    "galleries/" : "galleriesIndex",
    "photo/:id" : "photo",
    "gallery/:id" : "galleryShow",
  },

  photoindex: function(){
    var photos = this.photos;
    photos.fetch();
    var view = new FlickrClone.Views.PhotosIndex({collection: photos});
    this._swapView(view);
  },

  galleriesIndex: function(){
    var galleries = this.galleries;
    galleries.fetch();
    var view = new FlickrClone.Views.GalleriesIndex({collection: galleries});
    this._swapView(view);
  },

  photo: function(id){
    var photo = this.photos.getOrFetch(id);
    var view = new FlickrClone.Views.PhotoShow({model: photo});
    this._swapView(view);
  },

  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
