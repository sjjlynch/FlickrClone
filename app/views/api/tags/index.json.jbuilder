json.array! @tags do |tag|
  json.extract! tag, :id, :label, :created_at, :updated_at
end
