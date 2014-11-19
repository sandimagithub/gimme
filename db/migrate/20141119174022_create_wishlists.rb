class CreateWishlists < ActiveRecord::Migration
  def change
    create_table :wishlists do |t|
      t.string :title
      t.string :kind
      t.date :date
      t.string :event_url
      t.text :description

      t.timestamps
    end
  end
end
