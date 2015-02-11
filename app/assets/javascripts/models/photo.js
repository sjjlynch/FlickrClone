FlickrClone.Models.Photo = Backbone.Model.extend({
  urlRoot: "api/photos",

  tags: function() {
    if (!this._tags) {
      this._tags = new FlickrClone.Collections.Tags([], {photo: this});
    }

    return this._tags;
  },

  parse: function(response) {
    if (response.tags) {
      this.tags().set(response.tags, {parse: true});
      delete response.tags;
    }

    return response;
  }
});
