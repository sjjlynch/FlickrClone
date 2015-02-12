FlickrClone.Views.GalleryFormModal = Backbone.View.extend({

  template: JST["galleries/form_modal"],

  events: {
    'submit form': 'submit',
    'click .end-modal': 'endmodal',
    // 'click .modal-background' : 'endmodal'
  },

  endmodal: function (event) {
    event.preventDefault();
    this.remove();
  },

  render: function(){
    var content = this.template({gallery: this.model});
    this.$el.html(content);
    return this;
  },

  submit: function(event){
    event.preventDefault();
    this.remove();
    var $form = $(event.currentTarget);
    var attr = $form.serializeJSON();
    this.model.set(attr);
    var that = this;
    this.model.save({}, {
      success: function(){
        that.collection.add(that.model, {merge: true});
        Backbone.history.navigate("/galleries/" + that.model.id, {trigger: true});
      }
    });
  }

});
