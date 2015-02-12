class Tag < ActiveRecord::Base
  validates :label, presence: true
  has_many :taggings
  has_many :photos, through: :taggings, source: :photo

  def self.search(params)
    tag = Tag.all
    tag = tag.where("label =", params[:search_query])
    tag
  end

end
