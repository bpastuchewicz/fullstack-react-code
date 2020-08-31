import React from 'react';

export const MessageList = (props) => (
    <div className='ui comments'>
        {
            props.messages.map((m, index) => (
                <div
                    className='comment'
                    key={index}
                    onClick={() => props.onClick(m.id)}
                >
                    <div className='text'>
                        {m.text}
                        <span className='metadata'>@{
                            new Intl.DateTimeFormat('pl-Pl',
                                {
                                    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit',
                                    minute: '2-digit', second: '2-digit'
                                })
                                .format(m.timestamp)}
                        </span>
                    </div>
                </div>
            ))
        }
    </div>
);