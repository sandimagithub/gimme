class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.string :url
      t.string :img_url
      t.text :description

      t.timestamps
    end
  end
end
