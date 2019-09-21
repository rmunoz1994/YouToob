json.extract! channel, :name, :description, :id
json.userId channel.user_id
json.videoIds channel.videos.map { |video| video.id}
json.createdAt channel.created_at