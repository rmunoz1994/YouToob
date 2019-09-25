# == Schema Information
#
# Table name: channels
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :text
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord 

    validates :name, presence: true, uniqueness: { scope: :creator_id, case_sensitive: false }

    belongs_to :creator,
        class_name: :User,
        primary_key: :id,
        foreign_key: :creator_id

    has_many :videos, dependent: :destroy

end
