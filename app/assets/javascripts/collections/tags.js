FlickrClone.Collections.Tags = Backbone.Collection.extend({
  url: "api/tags",
  model: FlickrClone.Models.Tag,

  getOrFetch: function(id){
    var tags = this;
    var tag = this.get(id);
    if (tag) {
      tag.fetch();
    } else {
      tag = new FlickrClone.Models.Tag({id: id});
      tag.fetch({
        success: function () {
          tags.add(tag);
        }
      });
    }
    return tag;
  }
});
