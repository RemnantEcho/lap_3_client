import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'
import { AuthProvider } from './context/AuthProvider';
import store from './store'

import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
        </AuthProvider>
    </React.StrictMode>
);
