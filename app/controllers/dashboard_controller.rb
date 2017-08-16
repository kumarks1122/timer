class DashboardController < ApplicationController
	before_action :authenticate_user!

	def index
		redirect_to thankyou_path if current_user.confirmed_at.nil?
	end

	def thankyou
		unless current_user.confirmed_at.nil?
			redirect_to root_path 
		else
			render layout: "plain_layout"
		end
	end
end
