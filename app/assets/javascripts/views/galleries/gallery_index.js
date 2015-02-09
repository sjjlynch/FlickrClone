FlickrClone.Views.GalleriesIndex = Backbone.View.extend({
  template: JST["galleries/index"],

  initialize: function(){
    this.listenTo(this.collection, "sync add remove update", this.render)
  },

  render: function(){
    var content = this.template({galleries: this.collection});
    this.$el.html(content);
    return this;
  }

});
