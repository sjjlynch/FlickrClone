class Tagging < ActiveRecord::Base
validates :photo, :tag, presence: true
belongs_to :tag, class_name: "Tag", foreign_key: "tag_id"
belongs_to :photo, class_name: "Photo", foreign_key: "photo_id"
end
