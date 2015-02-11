FlickrClone.Collections.Galleries = Backbone.Collection.extend({
  url: "api/galleries",
  model: FlickrClone.Models.Gallery,

  getOrFetch: function(id){
    var galleries = this;
    var gallery = this.get(id);

    if (gallery) {
      gallery.fetch();
    } else {
      gallery = new FlickrClone.Models.Gallery({id: id});
      gallery.fetch({
        success: function () {
          galleries.add(gallery);
        }
      });
    }
    return gallery;
  },
});
