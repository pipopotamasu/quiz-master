class QuizzesController < ApplicationController
  def index
    @quizzes = Quiz.all
    respond_to do |format|
      format.html
      format.json do
        render json: { quizzes: @quizzes }
      end
    end
  end
end