class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.text :description
      t.integer :creator_id, null: false, index: true
      t.timestamps
    end
    add_index :channels, [:name, :creator_id], unique: true
  end
end
