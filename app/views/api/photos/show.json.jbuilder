# json.extract! @photo, :id, :title, :description, :photographer_id, :gallery_id, :filepicker_url, :created_at, :updated_at
json.partial!("photo", :photo => @photo)
