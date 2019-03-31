# == Schema Information
#
# Table name: videos
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :text             not null
#  uploader_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord

    validates :title, :description, presence: true

    belongs_to :uploader,
        class_name: :User,
        primary_key: :id,
        foreign_key: :uploader_id

    has_one_attached :videoUrl
    has_one_attached :thumbnailUrl

end
