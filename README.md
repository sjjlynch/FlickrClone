# Flickr Clone

[Heroku link][heroku]

[heroku]: https://flickr-cloned.herokuapp.com/

## Minimum Viable Product
FlickrClone is a clone of Flickr built on Rails and Backbone. Basics:

- [x] Create user accounts
- [x] Create sessions (log in)
- [x] Upload photos
- [x] Tag photos
- [x] Create albums
- [x] Create galleries
- [x] Search photos/galleries

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Add profiles, photos, galleries (~2 days)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create profiles, galleries, and
upload photos (using Filepicker). Also, will enable tagging on photos. Will continually push to Heroku to make sure everything works.
[Details][phase-one]

### Phase 2: Backbone Views (~2 days)
Add routes, Backbone models and collections to fetch data. By the end of this
phase, the existing Rails views will have been ported over to Backbone.

[Details][phase-two]

### Phase 3: Searching for Images and Galleries (~1 day)
I plan to add a search route that finds photos and galleries based on titles and
taggings.

[Details][phase-three]

### Phase 4: Styling, jQuery, CSS (~ 2 days)
Adding CSS, and jQuery features to make it look similar to real Flickr, but more responsive.

[Details][phase-four]


### Bonus Features (TBD)
- [x] 'Favorite' button
- [x] User follows
- [x] Geotagging
- [x] Add comments

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md

