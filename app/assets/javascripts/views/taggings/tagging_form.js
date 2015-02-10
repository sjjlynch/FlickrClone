FlickrClone.Views.TaggingForm = Backbone.View.extend({

  // initialize: function(options){
  //   this.taggings = options.taggings;
  // },

  template: JST["taggings/form"],

  events: {
    'submit form': 'submit'
  },

  render: function(){
    var content = this.template({
      taggings: this.taggings
    });
    this.$el.html(content);
    return this;
  },

  submit: function(event){
    event.preventDefault();
    var $form = $(event.currentTarget);
    var attr = $form.serializeJSON();
    this.model.set(attr);
    var that = this;
    this.model.save({}, {
      success: function(){
        that.collection.add(that.model, {merge: true});
      }
    });
  }

});
