class Tagging < ActiveRecord::Base
validates :photo_id, :tag_id, presence: true

belongs_to :photo, class_name: "Photo", foreign_key: "photo_id"
end
