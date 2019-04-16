import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga'

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import AppContainer from './AppContainer';
import * as serviceWorker from './serviceWorker';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(sagaMiddleware),
	)
);

sagaMiddleware.run(rootSaga)

ReactDOM.render((
	<Provider store={store}>
		<AppContainer />
	</Provider>
), document.getElementById('root'));

serviceWorker.unregister();
