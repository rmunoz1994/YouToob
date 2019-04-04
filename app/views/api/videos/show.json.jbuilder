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

json.comments do
    @video.comments.each do |comment|
        json.set! comment.id do
            json.partial! '/api/comments/comment', comment: comment
        end
    end
end