class CreateTimeTracker < ActiveRecord::Migration[5.1]
  def change
    create_table :time_trackers do |t|
      t.time :sign_time
      t.integer :user_id
      t.timestamps null: false
    end
  end
end
