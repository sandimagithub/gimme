class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
    	t.integer :user_id
    	t.integer :wishlist_id
      t.string :title
      t.string :url
      t.string :img_url
      t.text :description

      t.timestamps
    end
  end
end
