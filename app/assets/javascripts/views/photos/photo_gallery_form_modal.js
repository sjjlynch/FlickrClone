FlickrClone.Views.PhotoGalleryModal = Backbone.CompositeView.extend({
  template: JST['photos/form_modal'],

  initialize: function () {
    this.model.fetch();
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click submit': 'submit',
    'change select[name="photo[gallery_id]"]': 'maybeDiscard'
  },

  maybeDiscard: function (event) {
    event.preventDefault();
    var val = $(event.currentTarget).val();
    if (val!=="New") {
      this.remove();
    }
  },

  render: function () {
    // var content = this.template({
    //   model:
    //   collection:
    // });
    // this.$el.html(content);
    // this.attachSubviews();
    // return this;
  }
});




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
