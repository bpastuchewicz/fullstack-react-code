import uuid from 'uuid';
export const messagesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            const newMessage = {
                text: action.text,
                timestamp: Date.now(),
                id: uuid.v4(),
            };
            return state.concat(newMessage);
        }
        case 'DELETE_MESSAGE': {
            return state.filter(m => m.id !== action.id);
        }
        case 'EDIT_MESSAGE': {            
            const newMessage = {
                text: action.text,
                timestamp: Date.now(),
                id: action.id,
            };
            return state.filter(m => m.id !== action.id).concat(newMessage)            
        }

        default: {
            return state;
        }
    }
}