export const deleteMessage = (id) => {
    return {
        type: 'DELETE_MESSAGE',
        id: id,
    };
}

export const addMessage = (text, threadId) => {
    return {
        type: 'ADD_MESSAGE',
        text: text,
        threadId: threadId,
    };
}
export const editMessage = (text, id) => {    
    return {
        type: 'EDIT_MESSAGE',
        text: text,
        id: id,
    };
}
export const dataLoaded = (threadId,json) => {
    console.log(json)
    return {
        type: 'DATA_LOADED',
        payload: json,
        threadId: threadId
    };
}

export function getData(threadId) {
   return dispatch => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => dispatch(dataLoaded(threadId,json)));
    }
};