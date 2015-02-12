FlickrClone.Views.TagShow = Backbone.View.extend({
  template: JST["tags/show"],

  initialize: function(options){
    this.listenTo(this.model, "change add", this.render);
    this.listenTo(this.collection, "add", this.render);
    this.photo = options.photo
  },

  render: function(){
    var content = this.template({
      photo: this.photo,
      tag: this.model
      });
    this.$el.html(content);
    return this;
  }
});
