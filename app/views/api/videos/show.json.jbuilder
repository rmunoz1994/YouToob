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

@video.comments.includes(:author).each do |comment|

    json.comments do
        json.set! comment.id do
            json.partial! '/api/comments/comment', comment: comment
            if comment.replies.present?
                json.commentIds do
                    json.array! comment.replies.pluck(:id)
                end
            end
        end
    end

    json.commentAuthors do
        json.set! comment.author.id do
            json.partial! '/api/users/user', user: comment.author
        end
    end
    
end






