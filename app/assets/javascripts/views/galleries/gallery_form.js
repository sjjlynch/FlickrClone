FlickrClone.Views.GalleryForm = Backbone.View.extend({

  template: JST["galleries/form"],

  intialize: function(options){
    this.model = options.model;
    this.listenTo(this.model, "add sync change", this.render);
  },

  events: {
    'submit form': 'submit'
  },

  render: function(){
    var content = this.template({gallery: this.model});
    this.$el.html(content);
    return this;
  },

  submit: function(event){
    event.preventDefault();
    var $form = $(event.currentTarget);
    var attr = $form.serializeJSON();
    this.model.set(attr);
    debugger
    var that = this;
    this.model.save({}, {
      success: function(){
        that.collection.add(that.model, {merge: true});
        Backbone.history.navigate("/galleries/" + that.model.id, {trigger: true});
      }
    });
  }

});
