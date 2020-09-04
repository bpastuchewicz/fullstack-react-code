import React from 'react';
import { MessageList } from "./MessageList.js"
import { TextFieldSubmit } from "./TextFieldSubmit.js"

const Thread = (props) => (
    <div className='ui center aligned basic segment'>
        <MessageList
            messages={typeof props.thread !=='undefined' ? props.thread.messages : []}
            onClick={props.onMessageClick}
            onEdit={props.onMessageEdit}
        />
        <TextFieldSubmit
            onSubmit={props.onMessageSubmit}
        />
        <button onClick={props.onRemoteLoad}><i className="icon search" onClick={props.onRemoteLoad}>Load</i></button> 
    </div>
);
export default Thread;