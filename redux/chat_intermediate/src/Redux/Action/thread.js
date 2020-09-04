export const openThread = (id) => {
    return {
        type: 'OPEN_THREAD',
        id: id,
    };
}

export const addThread = (title) => {
    return {
        type: 'ADD_THREAD',
        title: title
    };
}
export const deleteThread = (threadId) => {    
    return {
        type: 'DELETE_THREAD',
        threadId: threadId
    };
}