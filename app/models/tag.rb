class Tag < ActiveRecord::Base
  validates :label, presence: true
  has_many :taggings
  has_many :photos, through: :taggings, source: :photo

  # def self.search(params)
  #   tags_by_title = Tag.where(label: params[:tag_search_query])
  # end

end
