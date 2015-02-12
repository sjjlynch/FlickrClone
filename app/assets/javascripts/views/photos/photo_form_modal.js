FlickrClone.Views.PhotoFormModal = Backbone.CompositeView.extend({

  initialize: function(options){
    this.galleries = options.galleries;
    // this.listenTo(this.model, "change", this.addNewGallery);
  },

  template: JST["photos/form_modal"],

  events: {
    'submit form': 'submit',
    // 'change select[name="photo[gallery_id]"]': 'maybeNewGalleryModal'
    'click .end-modal': 'endmodal',
    // 'click .modal-background' : 'endmodal'
    'change input[type="filepicker"]': 'maybeRenderPreview'
  },

  endmodal: function (event) {
    event.preventDefault();
    this.remove();
  },

  maybeRenderPreview: function(event) {
    event.preventDefault();
    if (this.$("input[type=filepicker]")) {
      var url = this.$("input[type=filepicker]").val()
      this.$(".photo-preview-image").attr("src", url);
    }
  },

  render: function(){
    $(window).load(function(){
      if (this.$('.filepickbutton').length>1) {
        this.$('.filepickbutton:last').remove();
      } //change this later
    });
    var content = this.template({
      photo: this.model,
      photos: this.collection,
      galleries: this.galleries
    });
    this.$el.html(content);
    $filePickerInput = this.$("input[type=filepicker]");
    filepicker.constructWidget($filePickerInput[0]);
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
        Backbone.history.navigate("/photos/" + that.model.id, {trigger: true});
      }
    });
  }

});
