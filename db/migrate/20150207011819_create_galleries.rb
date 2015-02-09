class CreateGalleries < ActiveRecord::Migration
  def change
    create_table :galleries do |t|
      t.string :title, null: false
      t.string :description
      t.integer :photographer_id, null: false

      t.timestamps null: false
    end
  end
end
