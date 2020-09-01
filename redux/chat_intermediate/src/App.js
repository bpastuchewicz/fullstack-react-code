import React from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


//containers
import { ThreadDisplay } from "./Container/ThreadDisplay.js"
import { ThreadTabs } from "./Container/ThreadTabs.js"

//reducers
import {activeThreadIdReducer,threadsReducer} from "./Redux/Reducer/thread"

const reducer = combineReducers({
  activeThreadId: activeThreadIdReducer,
  threads: threadsReducer,
});

const store = createStore(reducer);


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
