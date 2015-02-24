FlickrClone.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.$searchEl = options.$searchEl;
    this.$tagsearchEl = options.$tagsearchEl;
    this.$galdropEl = options.$galdropEl;
    this.photos = new FlickrClone.Collections.Photos();
    this.galleries = new FlickrClone.Collections.Galleries();
    this.searchSetup();
    // this.TagSearchSetup();
    this.galleriesDropdown();
  },

  routes: {
    "" : "photoindex",
    "photos" : "photoindex",
    // "photos/new" : "newphoto",
    "galleries/new" : "newgallery",
    "galleries" : "galleriesIndex",
    "photos/search/:params": "searchphotos",
    "photos/:id" : "photo",
    "galleries/:id" : "galleryshow",
  },

  photoindex: function(){
    var photo = new FlickrClone.Models.Photo();
    var photos = this.photos;
    photos.fetch();
    var galleries = this.galleries;
    galleries.fetch();
    var view = new FlickrClone.Views.PhotosIndex({
      model: photo,
      collection: photos,
      galleries: galleries
    });
    this._swapView(view);
  },

  searchphotos: function (params) {
    var photos = this.photos;
    photos.fetch();
    var view = new FlickrClone.Views.SearchShow({ params: params });
    this.swapView(view);
  },

  newphoto: function(){
    var photo = new FlickrClone.Models.Photo();
    var photos = this.photos;
    photos.fetch();
    var galleries = this.galleries;
    galleries.fetch();
    var view = new FlickrClone.Views.PhotoFormModal({ ///add Modal
      model: photo,
      collection: photos,
      galleries: galleries
    });
    this._swapView(view);
  },

  newgallery: function(){
    var gallery = new FlickrClone.Models.Gallery();
    var galleries = this.galleries;
    var view = new FlickrClone.Views.GalleryForm({
      model: gallery,
      collection: galleries
    });
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

  galleryshow: function(id){
    var gallery = this.galleries.getOrFetch(id);
    var galleries = this.galleries;
    galleries.fetch();
    var view = new FlickrClone.Views.GalleryShow({
      model: gallery,
      collection: galleries
    });
    this._swapView(view);
  },

  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  searchSetup: function () {
    var that = this;
    $.ajax({
      url: "/api/photos/titles",
      type: "get",
      success: function(data){
        var view = new FlickrClone.Views.SearchSetup({collection: data});
        that.$searchEl.html(view.render().$el)
      }
    });
  },

  // TagSearchSetup: function () {
  //   var that = this;
  //   $.ajax({
  //     url: "/api/tags",
  //     type: "get",
  //     success: function(data){
  //       var view = new FlickrClone.Views.TagSearchSetup({collection: data});
  //       that.$tagsearchEl.html(view.render().$el)
  //     }
  //   });
  // },

  galleriesDropdown: function () {
    var galleries = new FlickrClone.Collections.Galleries();
    galleries.fetch();
    var view = new FlickrClone.Views.GalleriesDropdown({collection: galleries});
    // this.$galdropEl.html(view.render().$el);
    $('#nav-list').append(view.render().$el);
  }

});
