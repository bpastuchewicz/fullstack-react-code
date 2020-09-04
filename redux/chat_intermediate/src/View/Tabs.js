import React from 'react';
import { TextFieldSubmit } from "./TextFieldSubmit.js"

export const Tabs = (props) => (
    <div className='ui top attached tabular menu grid'>
        {
            props.tabs.map((tab, index) => (
                <div
                    key={index}
                    className={tab.active ? 'active item' : 'item'}
                    onClick={() => props.onClick(tab.id)}
                >
                    {tab.title}
                    <i className="icon trash" onClick={() => props.onThreadDelete(tab.id)} ></i>
                </div>
            ))
        }  
        <div className='item icon edit'>
        <TextFieldSubmit
            onSubmit={props.onThreadSubmit}
        /></div>      
    </div>
);