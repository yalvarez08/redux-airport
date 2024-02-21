import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './components/App/App';

/** TODO: import REDUX **/
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

/** TODO: Add REDUCERS */
const airlines = (state = [], action) => {
    //console.log('airlines reducer.', action);

    if (action.type === 'AIRLINELIST_ADD') {
        console.log(`airline to add is: ${action.payload}`);
        return [...state, action.payload];
    }
    
    return state;
}

/** TODO: Create store */
const storeInstance = createStore (
    combineReducers(
        {airlines}
    ),
    applyMiddleware(logger)
);


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);