import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'

import { SnackbarProvider } from 'notistack';



const store=createStore(rootReducer);

ReactDOM.render(<Provider store={store}> 
                <SnackbarProvider maxSnack={3} preventDuplicate={true} >
                <App />
                </SnackbarProvider>
</Provider>, document.getElementById('root'));
