FlickrClone.Views.PhotosIndex = Backbone.View.extend({
  template: JST["photos/index"],

  events: {
    'click .delete': 'destroyPhoto'
  },

  destroyPhoto: function(event){
    var $target = $(event.currentTarget);
    var photo = this.collection.getOrFetch($target.attr("data-id"));
    photo.destroy();
  },

  initialize: function(){
    this.listenTo(this.collection, "sync add remove update", this.render);
  },

  render: function(){
    var content = this.template({photos: this.collection});
    this.$el.html(content);
    return this;
  }

});
