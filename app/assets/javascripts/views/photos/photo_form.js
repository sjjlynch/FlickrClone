FlickrClone.Views.PhotoForm = Backbone.View.extend({

  template: JST["photos/form"],

  intialize: function(options){
    this.model = options.model;
    this.listenTo(this.model, "add sync change", this.render);
  },

  events: {
    'submit form': 'submit'
  },

  render: function(){
    $(window).load(function(){
      if (this.$('.filepickbutton').length>1) {
        this.$('.filepickbutton:last').remove();
      }
    });
    var content = this.template({photo: this.model});
    this.$el.html(content);
    $filePickerInput = this.$("input[type=filepicker]");
    filepicker.constructWidget($filePickerInput[0]);
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
        Backbone.history.navigate("/photos/" + that.model.id, {trigger: true});
      }
    });
  }

});
