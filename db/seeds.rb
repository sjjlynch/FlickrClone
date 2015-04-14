Gallery.create!([
  {title: "Gallery 1", description: "Gallery description 1", photographer_id: 8},
  {title: "Gallery Test 2", description: "Description", photographer_id: 8},
  {title: "gallery title", description: "gallery description", photographer_id: 14},
  {title: "New Gallery", description: "gallery description", photographer_id: 14},
  {title: "gallery title", description: "gallery description", photographer_id: 14},
  {title: "gallery title", description: "gallery description", photographer_id: 14},
  {title: "Kittens", description: "So many kitten photos.", photographer_id: 15},
  {title: "Pokemon", description: "Poke photos", photographer_id: 15},
  {title: "Mod Test", description: "asdflajsdfl;jkadls;fjk", photographer_id: 15}
])
Photo.create!([
  {photographer_id: 14, title: "test photo 1", description: nil, filepicker_url: "https://www.filepicker.io/api/file/cWoebYMTSo2g9xRmPzOm", gallery_id: 1},
  {photographer_id: 14, title: "title", description: nil, filepicker_url: "https://www.filepicker.io/api/file/xAmeuTAcTdGP5MWF9e9L", gallery_id: 1},
  {photographer_id: 14, title: "title", description: nil, filepicker_url: "https://www.filepicker.io/api/file/WivwhyC6RD2M0lmuN0T0", gallery_id: 2},
  {photographer_id: 14, title: "asdfasdfasdf", description: "asdfasf", filepicker_url: "https://www.filepicker.io/api/file/qEVPnEBESiyjlaSK5Qkd", gallery_id: 4},
  {photographer_id: 15, title: "titleadsfasf", description: "descasdfsaf", filepicker_url: "https://www.filepicker.io/api/file/vPLbdPhhTxWffrmLLQdz", gallery_id: 0},
  {photographer_id: 15, title: "title", description: "descjioihj;", filepicker_url: "https://www.filepicker.io/api/file/4IZtxLreRk2dj8uOBh8i", gallery_id: 0},
  {photographer_id: 15, title: "title", description: "desc", filepicker_url: "https://www.filepicker.io/api/file/tcCIJvBSTM2cEQMJynei", gallery_id: 0},
  {photographer_id: 15, title: "title", description: "desc", filepicker_url: "https://www.filepicker.io/api/file/rJ3Ch8aBTo2r20AnmpK0", gallery_id: 0},
  {photographer_id: 15, title: "title", description: "desc", filepicker_url: "https://www.filepicker.io/api/file/z5GqyCujT6apiDflmoQI", gallery_id: 0},
  {photographer_id: 15, title: "title", description: "desc", filepicker_url: "https://www.filepicker.io/api/file/fIYlW6PmQu6uIMTDpkKe", gallery_id: 0},
  {photographer_id: 15, title: "title", description: "desc", filepicker_url: "https://www.filepicker.io/api/file/rZPwhLRTTOkybAHHEMJg", gallery_id: 0},
  {photographer_id: 15, title: "title", description: "desc", filepicker_url: "https://www.filepicker.io/api/file/dhCkAPLSTGKC0PV2Kpor", gallery_id: 0},
  {photographer_id: 15, title: "sdafasdfasdf", description: "desc", filepicker_url: "https://www.filepicker.io/api/file/PEyzIabNTB66YyjrIbgb", gallery_id: 9},
  {photographer_id: 15, title: "titleasdf", description: "descasdf", filepicker_url: "https://www.filepicker.io/api/file/V2PvDcLHTqS5O7NtWI2P", gallery_id: 8},
  {photographer_id: 15, title: "", description: "", filepicker_url: "https://www.filepicker.io/api/file/r4IsJfKIRga6GEIQ9rAb", gallery_id: 8},
  {photographer_id: 15, title: "", description: "", filepicker_url: "https://www.filepicker.io/api/file/6G3KDhlNRYaFHuzl0LJv", gallery_id: 0}
])
Tag.create!([
  {label: "tag name"},
  {label: "taadsfasdf"},
  {label: "as;ldfjkl;askdfj"},
  {label: "cat"},
  {label: "cats"},
  {label: "yellow"}
])
Tagging.create!([
  {photo_id: 51, tag_id: 101},
  {photo_id: 51, tag_id: 102},
  {photo_id: 50, tag_id: 103},
  {photo_id: 44, tag_id: 104},
  {photo_id: 44, tag_id: 105},
  {photo_id: 48, tag_id: 106}
])
User.create!([
  {session_token: "2abDoaoufVnZb-UPnh2QLA", email: "emailaddress", password_digest: "$2a$10$EIZXFXPKAlWIAM0gQ4lFL.oLxnrNmjis6K12waT8eH2PX0/u.kclK", username: "TestUser"},
  {session_token: "7HiRSLTur7FrzAVcdb0oQw", email: "email", password_digest: "$2a$10$sXwuYwIJfEbhvLfdTrBL.eY7IfHhqFO7RD3c7meKx1jU2Vs.6o/DW", username: "username"}
])
