class ApplicationController < ActionController::Base
	respond_to :html, :json
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  helper_method :current_user_enrolled

  before_action :configure_permitted_parameters, if: :devise_controller?

  def current_user_enrolled
    current_user.time_trackers.where("created_at > ? and created_at < ?", DateTime.now.beginning_of_day, DateTime.now.end_of_day).length > 0
  end

  protected

  def configure_permitted_parameters
    added_attrs = [:username, :email, :first_name, :last_name, :password, :password_confirmation, :remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end
end
