FlickrClone.Views.TagForm = Backbone.View.extend({

  initialize: function(options){
    this.photo = options.photo;
  },

  template: JST["taggings/form"],

  events: {
    'submit form': 'submit'
  },

  render: function(){
    var content = this.template({
      tag: this.model
    });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var $form = $(event.currentTarget);
    var attr = $form.serializeJSON();
    this.model.set(attr);
    var that = this;
    this.model.save({photo_id: this.photo.escape("id")}, {
      success: function(){
        that.collection.add(that.model, {merge: true});
      }
  });
}

});
