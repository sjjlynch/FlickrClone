FlickrClone.Collections.Galleries = Backbone.Collection.extend({
  url: "api/galleries",
  model: FlickrClone.Models.Gallery,
});
