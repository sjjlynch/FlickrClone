class Photo < ActiveRecord::Base

  validates :photographer_id, :filepicker_url, presence: true
  belongs_to :user, class_name: "User", foreign_key: "photographer_id"

  # attr_accessible :filepicker_url

end