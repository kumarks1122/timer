class User < ApplicationRecord
	before_save { self.email = email.downcase }


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable

  validates :username, presence: true, format: { with: /\A[a-zA-Z0-9]+\Z/ }, uniqueness: { case_sensitive: false }

  has_many :time_trackers
  
  attr_accessor :login

  def self.find_for_database_authentication(warden_conditions)
  	conditions = warden_conditions.dup
  	conditions[:email].downcase! if conditions[:email]
  	conditions[:username].downcase! if conditions[:username]
  	if login = conditions.delete(:login)
  		where(conditions.to_h).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
  	elsif conditions.has_key?(:username) || conditions.has_key?(:email)
  		where(conditions.to_h).first
  	end
  end

end
