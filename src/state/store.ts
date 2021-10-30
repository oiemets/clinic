import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { patientsReducer } from './patients';
import { watcherSaga } from './sagas/rootSaga';
import { createReduxLoggerMiddleware } from './middlewares';
import { TheClinicAPIClient } from '../api';

const reducer = combineReducers({
	patients: patientsReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const api = new TheClinicAPIClient();

export const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware, createReduxLoggerMiddleware())
);

sagaMiddleware.run(watcherSaga);
