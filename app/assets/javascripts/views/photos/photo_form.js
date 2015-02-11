FlickrClone.Views.PhotoForm = Backbone.View.extend({

  initialize: function(options){
    this.galleries = options.galleries;
    // this.listenTo(this.model, "change", this.addNewGallery);
  },

  template: JST["photos/form"],

  events: {
    'submit form': 'submit',
    'change select[name="photo[gallery_id]"]': 'addNewGallery'
  },

  addNewGallery: function(event){
    // this.$('select[name="photo[gallery_id]"]').change(function(){
      var val = $(event.currentTarget).val();
      debugger
      if (val==="New") {
        console.log("New gallery");
        this.$('form.newphoto').append(''); ///subview gallery form
      }
    // });
  },

  //
  // renderGalleryForm: function() {
  //   var that = this;
  //   var newgallery = new FlickrClone.Models.Gallery();
  //   var galleries = new FlickrClone.Collections.Galleries();
  //   galleries.fetch();
  //   var view = new FlickrClone.Views.GalleryForm({
  //     model: newgallery,
  //     collection: galleries
  //   });
  //   this.addSubview("#gallery-form", view);
  // },

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
