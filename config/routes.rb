Rails.application.routes.draw do

	root 'dashboard#index'

	get "/thankyou" => 'dashboard#thankyou'
	get "/accounts/get_logs" => 'accounts#get_logs'
	get "/accounts/user_logs" => 'accounts#user_logs'

  devise_for :users
  
  resources :accounts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
