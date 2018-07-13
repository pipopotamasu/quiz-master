Rails.application.routes.draw do
  resources :quizzes
  root to: 'quizzes#index'

  namespace :admin do
    resources :quizzes
    root to: 'quizzes#index'
  end
end
