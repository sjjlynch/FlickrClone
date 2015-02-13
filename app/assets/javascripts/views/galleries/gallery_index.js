FlickrClone.Views.GalleriesIndex = Backbone.CompositeView.extend({
  template: JST["galleries/index"],

  initialize: function(){
    this.listenTo(this.collection, "sync add remove update", this.render)
  },

  render: function(){
    var content = this.template({galleries: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  events: {
    'click button': 'galleryModal',
    'mouseenter a': 'renderPreview',
    'mouseleave a': 'deletePreview'
  },

  renderPreview: function(event){
    var gallId = $(event.target).attr("data-id");
    var gals = new FlickrClone.Collections.Galleries();
    gals.fetch();
    var gallery = gals.getOrFetch(gallId);
    var galview = new FlickrClone.Views.GalleryPreview({
      model: gallery,
      collection: gals
    });
    galview.$(".galler-show-header").replaceWith("");
    this.addSubview("#previewArea", galview);
  },

  deletePreview: function(event){
    this.$("#previewArea").empty();
  },

  galleryModal: function(){
    var gallery = new FlickrClone.Models.Gallery();
    this.modalView = this.modalView ||
    new FlickrClone.Views.GalleryFormModal({
      model: gallery,
      collection: this.collection
    });
    $('body').prepend(this.modalView.render().$el);
    this.modalView.delegateEvents();
  }

});
