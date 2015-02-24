FlickrClone.Views.PhotoShow = Backbone.CompositeView.extend({
  template: JST["photos/show"],

  initialize: function(options){
    this.model.tags().each(this.addTag.bind(this));
    this.listenTo(this.model.tags(), "add", this.addTag);
    this.listenTo(this.model, "sync", this.render);
    this.addTagForm();
    this.url = options.url;

    // var showAll = options.showAll;
  },

  events: {
    'click .delete': 'destroyPhoto',
    'click .index': 'goToIndex',
    'mouseenter .photo-show-content': 'caption',
    // 'mouseenter .photo-show-content': 'showDetails',
    // 'mouseleave .photo-show-content': 'nocaption'
    // 'mouseleave .photo-show-content': 'hideDetails'
  },

  caption: function(event) {
    this.$(".photo-show-content").hcaptions({
      effect: "fade"
    });
  },

  showDetails: function(event) {
    // $target = this.$(".photo-title").toggle();
    $title = this.$(".photo-title");
    $description = this.$(".photo-description");
    $title.css({'visibility' : 'visible'});
    $description.css({'visibility' : 'visible'});
  },

  hideDetails: function(event) {
    $title = this.$(".photo-title");
    $description = this.$(".photo-description");
    $title.css({'visibility' : 'hidden'});
    $description.css({'visibility' : 'hidden'});
  },

  goToIndex: function(){
    Backbone.history.navigate("/photos", {trigger: true});
  },

  destroyPhoto: function(event){
    var $target = $(event.currentTarget);
    this.model.destroy();
    Backbone.history.navigate("/photos", {trigger: true});
  },

  addTag: function(tag) {
    var tags = new FlickrClone.Collections.Tags();
    tags.fetch();
    var view = new FlickrClone.Views.TagShow({
      model: tag,
      collection: tags
    });
    this.addSubview("#photo-taggings", view);
    if (this.tagFormView) {
      this.removeSubview("#taggings-form", this.tagFormView);
      this.addTagForm();
    }
  },

  render: function(){
    var content = this.template({photo: this.model});
    this.$el.html(content);
    this.attachSubviews();
    $title = this.$(".photo-title");
    $description = this.$(".photo-description");
    $title.css({'visibility' : 'hidden'});
    $description.css({'visibility' : 'hidden'});
    return this;
  },

  addTagForm: function() {
    var that = this;
    var newtag = new FlickrClone.Models.Tag();
    var tags = this.model.tags();
    this.tagFormView = new FlickrClone.Views.TagForm({
      model: newtag,
      collection: tags,
      photo: that.model
    });
    this.addSubview("#taggings-form", this.tagFormView);
  }


  // this.model.save({}, {
  //   success: function(){
  //     that.collection.add(that.model, {merge: true});
  //     Backbone.history.navigate("/galleries/" + that.model.id, {trigger: true});
  //   }
  // });
  //




});
