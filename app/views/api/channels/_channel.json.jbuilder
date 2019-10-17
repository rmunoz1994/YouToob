json.extract! channel, :name, :description, :id
json.creatorId channel.creator_id
json.videoIds channel.videos.map { |video| video.id}
json.createdAt channel.created_at
json.subscriptionCount channel.subscriptions.count
