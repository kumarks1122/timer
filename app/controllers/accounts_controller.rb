class AccountsController < ApplicationController
	before_action :authenticate_user!
	def index
		redirect_to thankyou_path if current_user.confirmed_at.nil?
	end

	def create
		current_user.time_trackers.create({sign_time: Time.now})
		render :json => { :data=> "success" }
	end

	def get_logs
		logs = current_user.time_trackers
		render :json => { :data=> logs }
	end

	def manager
		redirect_to thankyou_path if current_user.confirmed_at.nil?
		@users = User.where("id!=?", current_user.id)
	end

	def destroy
		user = User.find(params[:id])
		unless user.nil?
			UserMailer.account_deleted(user).deliver
			user.destroy
		end
		render :json => { :data=> "success" }
	end

	def user_logs
		date = DateTime.parse(params[:date])
		logs = TimeTracker.where("created_at > ? and created_at < ?", date.beginning_of_day, date.end_of_day).to_json(include: [:user])
		render :json => { :data=> JSON.parse(logs) }
	end
end
