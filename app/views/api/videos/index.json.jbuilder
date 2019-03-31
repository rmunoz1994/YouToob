json.array! @videos do |video|
    json.extract! video, :id, :title, :description
    json.thumbnail url_for(video.thumbnail)
end