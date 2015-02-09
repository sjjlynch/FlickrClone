class Gallery < ActiveRecord::Base

  validates :title, :description, presence: true
  belongs_to :user, class_name: "User", foreign_key: "photographer_id"
  has_many :photos, class_name: "Photo", foreign_key: "gallery_id"

end
