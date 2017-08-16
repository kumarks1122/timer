class UserMailer < ApplicationMailer

	def account_deleted(user)
  	@user = user
    mail(:to => @user[:email], :subject => "Account has been deleted")
  end
end
