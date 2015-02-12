FlickrClone.Views.GalleryItem = Backbone.View.extend({
  tagName: "a",

  template: JST['galleries/item'],

  attrs: {
    href: "javascript:void(0)"
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ photo: this.model });
    this.$el.html(content);
    return this;
  }
});
