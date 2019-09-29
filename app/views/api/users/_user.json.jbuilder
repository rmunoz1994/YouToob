json.extract! user, :first_name, :last_name, :id, :email 
json.ownChannelIds do 
    json.array! user.channels.map { |channel| channel.id }
end