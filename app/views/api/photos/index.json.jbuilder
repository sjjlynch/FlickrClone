# json.array! @photos do |photo|
#   json.extract! photo, :id, :title, :description, :photographer_id, :gallery_id, :filepicker_url, :created_at, :updated_at
# end

json.array! @photos do |photo|
  json.partial!("photo", :photo => photo)
end
