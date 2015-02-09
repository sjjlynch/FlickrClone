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













  // getOrFetchPhoto: function(galleryId, photoId){
  //   var gallery = this.get(galleryId);
  //   var photo;
  //   if (gallery) {
  //     photo = gallery.photos().getOrFetch(photoId);
  //     return photo;
  //   }
  //   photo = new FlickrClone.Models.Photo({id: photoId})
  //   photo.fetch();
  //   return photo;
  // }
