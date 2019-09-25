json.channel do
    json.partial! 'api/channels/channel', channel: @channel
end

@channel.videos.each do |video|
    json.videos do
        json.set! video.id do
            json.extract! video, :id, :title, :description
            json.createdAt video.create_at
            json.channelId video.channel_id
        end
    end
end