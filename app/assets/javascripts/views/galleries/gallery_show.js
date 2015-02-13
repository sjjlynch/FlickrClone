FlickrClone.Views.GalleryShow = Backbone.CompositeView.extend({

  template: JST["galleries/show"],

  initialize: function(options){
    var that = this;
    this.model.photos().each(function(photo){
      that.addPhoto(photo);
    });
    this.listenTo(this.model.photos(), "add", this.addPhoto);
    this.$('#gallery-index').mouseenter(function(){
      that.renderGalleryIndex();
    }).mouseleave(function() {
      that.removeSubview("#gallery-index", that.galIndexView);
    });
  },

  events: {
    'click button.modal-btn': 'photoModal'
  },

  photoModal: function(){
    var photo = new FlickrClone.Models.Photo();
    var photos = new FlickrClone.Collections.Photos();
    var galleries = this.collection;
    galleries.fetch();
    this.modalView = this.modalView ||
    new FlickrClone.Views.PhotoFormModal({
       model: photo,
       collection: photos,
       galleries: galleries
       });
    $('body').prepend(this.modalView.render().$el);
    this.modalView.delegateEvents();
  },

  addPhoto: function (photo) {
    var view = new FlickrClone.Views.GalleryItem({
      model: photo
    })
    this.addSubview("#mygallery", view);
    this.render();
  },

  render: function(){
    var view = this;
    var content = this.template({gallery: this.model});
    this.$el.html(content);
    this.attachSubviews();
    setTimeout(function(){
      this.$("#mygallery").justifiedGallery({
        "rowHeight": 200,
        "captions": true,
        "waitThumbnailsLoad": true,
        "captionSettings":	{ animationDuration: 500,
          visibleOpacity: 0.7,
          nonVisibleOpacity: 0.0 }
        });
    }.bind(this), 10);
    return this;
  },

  renderGalleryIndex: function() {
    var galIndexView = new FlickrClone.Views.GalleriesIndex({
      collection: this.collection
    });
    this.addSubview("#gallery-index", galIndexView);
  }

});
