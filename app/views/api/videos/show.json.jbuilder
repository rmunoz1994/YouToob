
json.extract! @video, :id, :title, :description
json.uploaderId @video.uploader_id
json.createdAt @video.created_at
json.thumbnail url_for(@video.thumbnail)