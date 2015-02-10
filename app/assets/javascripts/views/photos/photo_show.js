FlickrClone.Views.PhotoShow = Backbone.View.extend({
  template: JST["photos/show"],
  // template: function()
  // if gallery_show
  //   JST["photos/show_photo"]

  initialize: function(){
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    var content = this.template({photo: this.model});
    this.$el.html(content);
    return this;
  }
});
