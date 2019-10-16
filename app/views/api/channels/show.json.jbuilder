json.channel do
    json.partial! 'api/channels/channel', channel: @channel
end

json.subsriptionCount @channel.subscriptions.count

json.user do 
    json.partial! 'api/users/user', user: @channel.creator
end

if @current_user
    if @channel.subscriptions.find_by_subscriber_id(@current_user.id)
        json.subbed true
    else
        json.subbed false
    end
end

@channel.videos.each do |video|
    json.videos do
        json.set! video.id do
            json.extract! video, :id, :title, :description
            json.createdAt video.created_at
            json.channelId video.channel_id
            json.thumbnailUrl url_for(video.thumbnailUrl)
        end
    end
end
