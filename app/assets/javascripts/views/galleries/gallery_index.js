FlickrClone.Views.GalleriesIndex = Backbone.CompositeView.extend({
  template: JST["galleries/index"],

  initialize: function(){
    this.listenTo(this.collection, "sync add remove update", this.render)
  },

  render: function(){
    var content = this.template({galleries: this.collection});
    this.$el.html(content);
    return this;
  },

  events: {
    'click button': 'galleryModal'
  },

  galleryModal: function(){
    var gallery = new FlickrClone.Models.Gallery();
    this.modalView = this.modalView ||
    new FlickrClone.Views.PhotoFormModal({
      model: gallery,
      collection: this.collection
    });
    $('body').prepend(this.modalView.render().$el);
    this.modalView.delegateEvents();
  }

});
