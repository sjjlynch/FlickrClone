FlickrClone.Views.PhotosIndex = Backbone.CompositeView.extend({
  template: JST["photos/index"],

  initialize: function(options){
    this.render();
    this.listenTo(this.collection, "sync", this.render);
    this.galleries = options.galleries;
  },

  events: {
    // 'click .delete': 'destroyPhoto',
    'click button.modal-btn': 'photoModal'
  },

  photoModal: function(){
    var photo = new FlickrClone.Models.Photo();
    var photos = new FlickrClone.Collections.Photos();
    var galleries = new FlickrClone.Collections.Galleries();
    galleries.fetch();
    galleries.fetch();
    this.modalView = this.modalView ||
    new FlickrClone.Views.PhotoFormModal({
      model: photo,
      collection: photos,
      galleries: this.galleries
    });
    $('body').prepend(this.modalView.render().$el);
    this.modalView.delegateEvents();
  },

  render: function(){
    var content = this.template({
      photos: this.collection
      });
    this.$el.html(content);
    setTimeout(function(){
      this.$("#myphotos").justifiedGallery({
        "rowHeight": 120,
        "captions": true,
        "waitThumbnailsLoad": true,
        "captionSettings":	{ animationDuration: 500,
          visibleOpacity: 0.7,
          nonVisibleOpacity: 0.0 }
        });
      }.bind(this), 10);
    return this;
  }

});
