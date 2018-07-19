require 'rails_helper'

RSpec.describe "quiz page", :type => :request do
  describe 'html' do
    before { get "/quizzes" }

    it "render quiz index page" do
      expect(response).to render_template('quizzes/index')
    end
  end

  describe 'json' do
    let!(:quiz_1) { create(:quiz) }
    let!(:quiz_2) { create(:quiz) }

    before { get "/quizzes.json" }

    it 'render quizzes json' do
      json = JSON.parse(response.body)["quizzes"]

      expect(response.content_type).to eq('application/json')
      expect(json.count).to eq(2)
      expect(json[0]).to eq(
        { "id" => quiz_2.id, "content" => quiz_2.content, "answer" => quiz_2.answer }
      )
      expect(json[1]).to eq(
        { "id" => quiz_1.id, "content" => quiz_1.content, "answer" => quiz_1.answer }
      )
    end
  end
end