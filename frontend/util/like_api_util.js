// export const fetchComments = videoId => (
//     $.ajax({
//         method: "GET",
//         url: `/api/videos/${videoId}/comments`
//     })
// );

// export const fetchComment = id => (
//     $.ajax({
//         method: "GET",
//         url: `/api/videos/${id}`
//     })
// );

export const createLike = like => {
    const type = like.likeable_type.toLowerCase() + "s";
    return $.ajax({
        method: 'POST',
        url: `/api/${type}/${like.likeable_id}/likes`,
        data: { like }
    });
};

// export const updateComment = comment => (
//     $.ajax({
//         method: 'PATCH',
//         url: `/api/comments/${comment.id}`,
//         data: { comment },
//     })
// );

export const deleteLike = like => {
    const type = like.likeable_type.toLowerCase() + "s";
    return $.ajax({
        method: 'DELETE',
        url: `/api/${type}/${like.likeable_id}/likes`,
        data: { like }
    });
};

// export const deleteLike = like => (
//     $.ajax({
//         method: 'DELETE',
//         url: `/api/comments/${like.id}`
//     })
// );
