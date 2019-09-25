json.videos do
    @videos.each do |video|
        json.set! video.id do
            json.partial! 'video', video: video
        end
    end
end

json.channels do
    @videos.each do |video|
        json.set! video.channel_id do
            json.extract! video.channel, :id, :name
        end
    end
end