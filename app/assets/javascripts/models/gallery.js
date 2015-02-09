FlickrClone.Models.Gallery = Backbone.Model.extend({
  urlRoot: "api/galleries",

  photos: function() {
    if (!this._photos) {
      this._photos = new FlickrClone.Collections.Photos([], {gallery: this});
    }

    return this._photos;
  },

  parse: function(response) {
    if (response.photos) {
      this.photos().set(response.photos, {parse: true});
      delete response.photos;
    }

    return response;
  }

});
