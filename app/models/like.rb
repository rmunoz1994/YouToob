class Like < ApplicationRecord

    validates :liked, presence: true
    validates :user_id, :uniqueness => { :scope => [:likeable_type, :likeable_id] }
    validates :likeable_type, :likeable_id, :presence => true

    belongs_to :likeable, :polymorphic => true
    belongs_to :user

end