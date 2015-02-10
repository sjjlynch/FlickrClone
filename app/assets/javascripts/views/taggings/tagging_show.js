FlickrClone.Views.TaggingShow = Backbone.View.extend({
  template: JST["taggings/show"],

  initialize: function(options){
    this.listenTo(this.model, "change add", this.render);
    this.photo = options.photo
  },

  render: function(){
    var content = this.template({photo: this.model});
    this.$el.html(content);
    return this;
  }

});
