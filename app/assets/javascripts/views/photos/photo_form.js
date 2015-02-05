FlickrClone.Views.photoForm = Backbone.View.extend({
  // tagName: "form"
  template: JST["photos/form"],

  events: {
    "click button": "submit"
  },

  render: function(){
    var content = this.template({photo: this.model});
    this.$el.html(content);
    return this;
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
  },

  submit: function(event){
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    var that = this;
    this.model.set(attrs);
    this.model.save({}, {
      success: function(){
        that.photos.add(that.model, {merge: true});
        Backbone.history.navigate("/api/photos/" + that.model.id, {trigger: true});
      }
    });
  }

});
