FlickrClone.Views.SearchShow = Backbone.View.extend({
  template: JST["search/show"],

  initialize: function(options){
    this.params = options.params;
    this.listenTo(this.collection, "sync add remove update", this.render);
    this.collection.photos().each(this.addPhoto.bind(this));
    // this.search(this.params);
  },

  render: function(){
    var content = this.template({photos: this.collection});
    this.$el.html(content);
    return this;
  },

});

















  // search: function (string) {
  //   var view = this;
  //   this.string = string
  //   $.ajax({
  //       data: string,
  //       dataType: 'json',
  //       url: '/api/photos/search',
  //       success: function (response) {
  // //
  //     }
  //   })
  // },
