require "administrate/base_dashboard"

class QuizDashboard < Administrate::BaseDashboard
  DATETIME_FORMAT = '%Y/%m/%d %H:%M:%S'.freeze
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    content: Field::Text,
    answer: Field::String,
    created_at: Field::DateTime.with_options(format: DATETIME_FORMAT),
    updated_at: Field::DateTime.with_options(format: DATETIME_FORMAT),
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :content,
    :answer,
    :created_at,
    :updated_at
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :content,
    :answer,
    :created_at,
    :updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :content,
    :answer
  ].freeze

  # Overwrite this method to customize how quizzes are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(quiz)
  #   "Quiz ##{quiz.id}"
  # end
end
