class CreateShifts < ActiveRecord::Migration[5.0]
  def change
    create_table :shifts do |t|
      t.datetime :start
      t.datetime :end
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
