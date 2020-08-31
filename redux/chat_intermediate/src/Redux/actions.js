function deleteMessage(id) {
    return {
        type: 'DELETE_MESSAGE',
        id: id,
    };
}

function addMessage(text, threadId) {
    return {
        type: 'ADD_MESSAGE',
        text: text,
        threadId: threadId,
    };
}

function openThread(id) {
    return {
        type: 'OPEN_THREAD',
        id: id,
    };
}