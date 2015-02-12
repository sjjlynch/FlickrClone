FlickrClone.Views.GalleriesDropdown = Backbone.View.extend({
  template: JST["search/dropdown"],

  tagName: "li",

  className: "dropdown",

  attrs: {
    id: "galleries-dropdown-menu"
  },

  events: {
    "click .dropdown-toggle": "toggleDropdown"
  },

  initialize: function(){
    this.listenTo(this.collection, "sync add remove update", this.render);
  },

  render: function(){
    var content = this.template({galleries: this.collection});
    this.$el.html(content);
    return this;
  },

  toggleDropdown: function (event) {
    event.preventDefault();
    this.$('.dropdown-toggle').dropdown('toggle');
  }

});
