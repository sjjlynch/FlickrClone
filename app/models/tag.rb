class Tag < ActiveRecord::Base
  validates :label, presence: true
  has_many :taggings
  has_many :photos, through: :taggings, source: :photo
end
