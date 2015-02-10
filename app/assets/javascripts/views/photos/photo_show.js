FlickrClone.Views.PhotoShow = Backbone.CompositeView.extend({
  template: JST["photos/show"],
  // template: function()
  // if gallery_show
  //   JST["photos/show_photo"]

  initialize: function(){
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    var content = this.template({photo: this.model});
    this.$el.html(content);
    this.renderTaggingForm();
    return this;
  },

  renderTaggingForm: function() {
    var view = new FlickrClone.Views.TaggingForm({
      photo: this.model
    });
    this.addSubview("#taggings-form", view);
  }
});
