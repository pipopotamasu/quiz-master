class QuizzesController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json do
        quizzes = Quiz.all.select(:id, :content, :answer).order(created_at: :desc)
        render json: { quizzes: quizzes }
      end
    end
  end
end