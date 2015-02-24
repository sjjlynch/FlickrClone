// FlickrClone.Views.TagSearchSetup = Backbone.View.extend({
//   template: JST["search/tags"],
//
//   render: function(){
//     var content = this.template({collection: this.collection});
//     this.$el.html(content);
//     this.$(".tag-search-criteria").typeahead({
//       hint: true,
//       highlight: true,
//       minLength: 1
//     },
//     {
//     name: "labels",
//     displayKey: "label",
//     source: substringMatcher(this.collection)
//   }).on('typeahead:selected', function (obj, datum) {
//     // Backbone.history.navigate("photos" { trigger: true })
//     // go to new index of photos that have tag
//   });;
//     return this;
//   }
//
// });
//
// function substringMatcher(labels) {
  // return function findMatches(q, cb) {
  //   var matches, substrRegex;
  //
  //   // an array that will be populated with substring matches
  //   matches = [];
  //
  //   // regex used to determine if a string contains the substring `q`
  //   substrRegex = new RegExp(q, 'i');
  //
  //   // iterate through the pool of strings and for any string that
  //   // contains the substring `q`, add it to the `matches` array
  //   $.each(titles, function(i, title) {
  //     if (substrRegex.test(title)) {
  //       // the typeahead jQuery plugin expects suggestions to a
  //       // JavaScript object, refer to typeahead docs for more info
  //       matches.push({ title: title[0], id: title[1] });
  //     }
  //   });
  //
  //   cb(matches);
  // };
// };
