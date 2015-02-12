// FlickrClone.Views.PhotoForm = Backbone.View.extend({
//
//   initialize: function(options){
//     this.galleries = options.galleries;
//     // this.listenTo(this.model, "change", this.addNewGallery);
//   },
//
//   template: JST["photos/form"],
//
//   events: {
//     'submit form': 'submit',
//     'change select[name="photo[gallery_id]"]': 'maybeNewGalleryModal'
//   },
//
//   maybeNewGalleryModal: function(event){
//     var val = $(event.currentTarget).val();
//     if (val==="New") {
//       this.modalView = this.modalView ||
//       new FlickrClone.Views.PhotoGalleryModal({
//         model: this.model,
//         collection: this.collection
//       });
//       $('form.newphoto').prepend(this.modalView.render().$el);
//       this.modalView.delegateEvents();
//     }
//   },
//
//   render: function(){
//     $(window).load(function(){
//       if (this.$('.filepickbutton').length>1) {
//         this.$('.filepickbutton:last').remove();
//       } //change this later
//     });
//     var content = this.template({
//       photo: this.model,
//       photos: this.collection,
//       galleries: this.galleries
//       });
//     this.$el.html(content);
//     $filePickerInput = this.$("input[type=filepicker]");
//     filepicker.constructWidget($filePickerInput[0]);
//     return this;
//   },
//
//   submit: function(event){
//     event.preventDefault();
//     var $form = $(event.currentTarget);
//     var attr = $form.serializeJSON();
//     this.model.set(attr);
//     var that = this;
//     this.model.save({}, {
//       success: function(){
//         that.collection.add(that.model, {merge: true});
//         Backbone.history.navigate("/photos/" + that.model.id, {trigger: true});
//       }
//     });
//   }
//
// });
