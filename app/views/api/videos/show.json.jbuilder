json.video do
    json.extract! @video, :id, :title, :description
    json.uploaderId @video.uploader_id
    json.createdAt @video.created_at
    json.videoUrl url_for(@video.videoUrl)
    json.thumbnailUrl url_for(@video.thumbnailUrl)
end

json.user do 
    json.partial! '/api/users/user', user: @video.uploader
end