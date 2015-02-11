FlickrClone.Views.PhotoShow = Backbone.CompositeView.extend({
  template: JST["photos/show"],

  initialize: function(options){
    this.listenTo(this.model, "change", this.render);
    // this.listenTo(this.model.taggings(), "add", this.addTag);
    // var showAll = options.showAll;
  },

  render: function(){
    var content = this.template({photo: this.model});
    this.$el.html(content);
    this.renderTagForm();
    this.addTags();
    return this;
  },

  renderTagForm: function() {
    var that = this;
    var newtag = new FlickrClone.Models.Tag();
    var tags = new FlickrClone.Collections.Tags();
    tags.fetch();
    var view = new FlickrClone.Views.TagForm({
      model: newtag,
      collection: tags,
      photo: that.model
    });
    this.addSubview("#taggings-form", view);
  },

  addTags: function() {
    var that = this;
    var view = new FlickrClone.Views.TagShow({
      photo: that.model
    });
    this.addSubview("#photo-taggings", view);
  }
});
