json.array! @galleries do |gallery|
  json.extract! gallery, :id, :title, :description, :photographer_id, :created_at, :updated_at
end
