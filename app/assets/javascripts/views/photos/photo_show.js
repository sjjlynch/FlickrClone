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
    this.addTaggings();
    return this;
  },

  renderTaggingForm: function() {
    var view = new FlickrClone.Views.TaggingForm({
      photo: this.model
    });
    this.addSubview("#taggings-form", view);
  },

  addTaggings: function() {
    var view = new FlickrClone.Views.TaggingShow({
      photo: this.model
    });
    this.addSubview("#photo-taggings", view);
  }
});
