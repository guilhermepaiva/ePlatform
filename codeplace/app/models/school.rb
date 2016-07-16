class School < ActiveRecord::Base
	mount_uploader :thumbnail, ImageUploader
end
