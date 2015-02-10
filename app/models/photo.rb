class Photo < ActiveRecord::Base

  validates :photographer_id, :filepicker_url, presence: true
  belongs_to :user, class_name: "User", foreign_key: "photographer_id"
  belongs_to :gallery, class_name: "Gallery", foreign_key: "gallery_id"
  has_many :taggings, class_name: "Tagging", foreign_key: "photo_id"
  # attr_accessible :filepicker_url

end
