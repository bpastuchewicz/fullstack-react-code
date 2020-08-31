import React from 'react';
import { MessageList } from "./MessageList.js"
import { TextFieldSubmit } from "./TextFieldSubmit.js"

const Thread = (props) => (
    <div className='ui center aligned basic segment'>
        <MessageList
            messages={props.thread.messages}
            onClick={props.onMessageClick}
        />
        <TextFieldSubmit
            onSubmit={props.onMessageSubmit}
        />
    </div>
);
export default Thread;