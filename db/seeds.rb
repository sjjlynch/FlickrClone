# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#<User id: 14, email: "email", password_digest: "$2a$10$sXwuYwIJfEbhvLfdTrBL.eY7IfHhqFO7RD3c7meKx1j...", session_token: "7HiRSLTur7FrzAVcdb0oQw", created_at: "2015-02-09 22:58:21", updated_at: "2015-02-10 00:33:19", username: "username">
irb(main):004:0>


User.create([{id: 1}, {username: "TestUser"}, {password: "password"}, {email: "email_address"}])

Gallery.create([{id: 1}, {title: "Flamingos"}, {description: "Pink birds that eat shrimp. Majestic."}, {photographer_id: 15}, {user_id: 1}])

Photo.create([{id: 1}, {title: "One flamingo"}, {description: "Pink birds that eat shrimp. Majestic."}, {photographer_id: 15}, {gallery_id: 1}, {user_id: 1}, {filepicker_url: "http://www.webexhibits.org/causesofcolor/images/content/istock000003867979mediumZ.jpg"}])
