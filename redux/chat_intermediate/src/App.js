import React from 'react';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';


//containers
import { ThreadDisplay } from "./Container/ThreadDisplay.js"
import { ThreadTabs } from "./Container/ThreadTabs.js"

//reducers
import {activeThreadIdReducer,threadsReducer} from "./Redux/Reducer/thread"
import {forbiddenWordsMiddleware } from "./Redux/Middleware/forbidden_words";
import {logger} from "./Redux/Middleware/logger"

const reducer = combineReducers({
  activeThreadId: activeThreadIdReducer,
  threads: threadsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk,forbiddenWordsMiddleware,logger));

const App = () => (
  <div className='ui segment'>
    {/* `Thread` changed to `ThreadDisplay` below */}
    <ThreadTabs />
    <ThreadDisplay />
  </div>
);


const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
