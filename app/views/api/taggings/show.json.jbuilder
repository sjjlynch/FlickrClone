json.array! @taggings do |tagging|
  json.extract! tagging, :tag, :id, :photo_id, :tag_id, :created_at, :updated_at
end
