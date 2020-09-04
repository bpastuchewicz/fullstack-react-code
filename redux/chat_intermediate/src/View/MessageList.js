import React from 'react';
import ContentEditable from 'react-contenteditable';


export const MessageList = (props) => (
    <div className='ui comments'>
        {
            props.messages.map((m, index) => (
                <div
                    className='comment'
                    key={index}                    
                >
                    <div className='text medium'>                         
                        <ContentEditable                            
                            html={m.text} // innerHTML of the editable div
                            disabled={false}       // use true to disable editing
                            onChange={(e) => props.onEdit(e.target.value,m.id)} // handle innerHTML change                            
                        />
                         
                        <span className='metadata mini label'>@{
                            new Intl.DateTimeFormat('pl-Pl',
                                {
                                    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit',
                                    minute: '2-digit', second: '2-digit'
                                })
                                .format(m.timestamp)}
                        </span>                        
                        <i className='comment delete icon' onClick={() => props.onClick(m.id)}></i>
                    </div>
                    
                </div>
            ))
        }
    </div>
);