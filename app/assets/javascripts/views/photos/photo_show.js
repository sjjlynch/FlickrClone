FlickrClone.Views.PhotoShow = Backbone.CompositeView.extend({
  template: JST["photos/show"],

  initialize: function(options){
    this.model.tags().each(this.addTag.bind(this));
    this.listenTo(this.model.tags(), "add", this.addTag);
    this.listenTo(this.model, "sync", this.render);
    this.addTagForm();

    // var showAll = options.showAll;
  },

  addTag: function(tag) {
    var view = new FlickrClone.Views.TagShow({
      model: tag
    });
    this.addSubview("#photo-taggings", view);
  },

  render: function(){
    var content = this.template({photo: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addTagForm: function() {
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
  }

});
