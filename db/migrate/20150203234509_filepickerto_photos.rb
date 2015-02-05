class FilepickertoPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :filepicker_url, :string
    change_column :photos, :filepicker_url, :string, null: false
  end
end
