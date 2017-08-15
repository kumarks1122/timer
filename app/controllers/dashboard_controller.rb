class DashboardController < ApplicationController
	before_action :authenticate_user!

	def index
		
	end

	def thankyou
		render layout: "plain_layout"
	end
end
