FlickrClone.Views.SearchSetup = Backbone.View.extend({
  template: JST["search/setup"],

  render: function(){
    var content = this.template({collection: this.collection});
    this.$el.html(content);
    this.$(".search-criteria").typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: "titles",
      displayKey: "title",
      source: substringMatcher(this.collection)
    }).on('typeahead:selected', function (obj, datum) {
      Backbone.history.navigate("photos/" + datum.id, { trigger: true })
    });;
    return this;
  }

});

function substringMatcher(titles) {
  return function findMatches(q, cb) {
    var matches, substrRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(titles, function(i, title) {
      if (substrRegex.test(title)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ title: title[0], id: title[1] });
      }
    });

    cb(matches);
  };
};
