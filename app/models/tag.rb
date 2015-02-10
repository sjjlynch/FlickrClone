class Tag < ActiveRecord::Base
  validates :label, presence: true
end
