import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers/index';

const logger = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

export {
	store
}