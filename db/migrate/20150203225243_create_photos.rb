class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :photographer_id, null: false
      t.string :title
      t.text :description

      t.timestamps null: false
    end
  end
end
