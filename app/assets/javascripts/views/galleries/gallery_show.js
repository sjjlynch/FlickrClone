FlickrClone.Views.GalleryShow = Backbone.CompositeView.extend({

  template: JST["galleries/show"],

  initialize: function(options){
    this.listenTo(this.model.photos(), "add", this.addPhoto);
    // this.listenTo(this.model, "sync", this.render);
  },

  addPhoto: function (photo) {
    var view = new FlickrClone.Views.PhotoShow({
      model: photo
    });
    this.addSubview("#photos", view);
  },

  render: function(){
    var view = this;
    var content = this.template({gallery: this.model});
    this.$el.html(content);
    this.renderGalleryIndex();
    this.attachSubviews();
    return this;
  },

  renderGalleryIndex: function() {
    var view = new FlickrClone.Views.GalleriesIndex({
      collection: this.collection
    });
    this.addSubview("#gallery-index", view);
  }

});
