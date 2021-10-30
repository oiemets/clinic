import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { patientsReducer } from './patients';
import { watcherSaga } from './sagas/rootSaga';
import { createReduxLoggerMiddleware } from './middlewares';

const reducer = combineReducers({
	patients: patientsReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware, createReduxLoggerMiddleware())
);

sagaMiddleware.run(watcherSaga);
