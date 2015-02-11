FlickrClone.Collections.Photos = Backbone.Collection.extend({
  url: "api/photos",
  model: FlickrClone.Models.Photo,

  getOrFetch: function(id){
    var photos = this;
    var photo = this.get(id);
    if (photo) {
      photo.fetch();
    } else {
      photo = new FlickrClone.Models.Photo({id: id});
      photo.fetch({
        success: function () {
          photos.add(photo);
        }
      });
    }
    return photo;
  }
});
