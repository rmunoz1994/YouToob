export const fetchSubscriptions = () => {
    return $.ajax({
        url: 'api/subscriptions'
    })
}

export const updateSubscription = channel_id => {
    return $.ajax({
        method: 'POST',
        url: 'api/subscriptions',
        data: { channel_id }
    })
}

export const deleteSubscription = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/subscriptions/${id}`
    })
}