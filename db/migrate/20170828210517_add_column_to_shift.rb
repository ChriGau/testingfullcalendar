class AddColumnToShift < ActiveRecord::Migration[5.0]
  def change
    add_column :shifts, :nombre, :integer
  end
end
