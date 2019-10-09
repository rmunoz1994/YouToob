# == Schema Information
#
# Table name: subscriptions
#
#  id            :bigint(8)        not null, primary key
#  subscriber_id :integer          not null
#  channel_id    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Subscription < ApplicationRecord 

    validates :channel_id, :subscriber_id, presence: true

    belongs_to :channel

    belongs_to :subscriber, 
        class_name: :User,
        primary_key: :id,
        foreign_key: :subscriber_id

    private

    def disable_self_subscribe
        channel = Channel.where(user_id: subscriber_id).first
        errors.add(:subscriber_id, "Cannot subscribe to your own channel") if channel.id == channel_id
    end

end
