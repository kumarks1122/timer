class User < ApplicationRecord
	before_save { self.email = email.downcase }

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :username, presence: true, format: { with: /\A[a-zA-Z0-9]+\Z/ }, uniqueness: { case_sensitive: false }
end
