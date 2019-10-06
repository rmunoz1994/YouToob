json.extract! user, :first_name, :last_name, :id, :email 
json.channelIds do 
    json.array! user.channels.map { |channel| channel.id }
end