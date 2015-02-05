FlickrClone.Views.GalleriesIndex = Backbone.View.extend({
  template: JST["galleries/index"],

  initialize: function(){
    this.listenTo(this.collection, "add remove update", this.render)
  },

  render: function(){
    var content = this.template({collection: photos});
    this.$el.html(content);
    return this;
  }

});
