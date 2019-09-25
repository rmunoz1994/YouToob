json.extract! video, :id, :title, :description
json.channelId video.channel_id
json.createdAt video.created_at
json.videoUrl url_for(video.videoUrl)
json.thumbnailUrl url_for(video.thumbnailUrl)