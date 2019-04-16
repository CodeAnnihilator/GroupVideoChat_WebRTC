import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './rootReducer';

import './index.css';

const history = createHistory();

const store = createStore(
	rootReducer(history),
	composeWithDevTools()
);

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root'));

serviceWorker.unregister();
