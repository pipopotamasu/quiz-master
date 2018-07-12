class CreateQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :quizzes do |t|
      t.text :content
      t.string :answer

      t.timestamps
    end
  end
end
