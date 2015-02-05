FlickrClone.Views.PhotosIndex = Backbone.View.extend({
  template: JST["photos/index"],

  initialize: function(){
    this.listenTo(this.collection, "sync add remove update", this.render);
  },

  render: function(){
    var content = this.template({photos: this.collection});
    this.$el.html(content);
    return this;
  }

});
