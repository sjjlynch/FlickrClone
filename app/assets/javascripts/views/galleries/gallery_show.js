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
    this.$(".photo-title").replaceWith("");
    this.$(".photo-description").replaceWith("")
    this.$(".add-tagging-window").replaceWith("")
    this.$(".index-link").replaceWith("")
  },

  render: function(){
    var view = this;
    var content = this.template({gallery: this.model});
    this.$el.html(content);
    this.renderGalleryIndex();
    // debugger
    // this.subviews.each(function(subview){
    //   this.$(".photo-title").attr("class", "hidden");
    // });
    this.attachSubviews();
    return this;
    $(window).load(function(){
      this.$(".photo-title").set("class", "hidden");
    });
  },

  renderGalleryIndex: function() {
    var view = new FlickrClone.Views.GalleriesIndex({
      collection: this.collection
    });
    this.addSubview("#gallery-index", view);
  }

});
