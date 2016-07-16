class Course < ActiveRecord::Base
	mount_uploader :thumbnail, ImageUploader
	has_many :chapters, :dependent => :destroy
end
