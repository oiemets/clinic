import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import { watcherSaga } from './sagas/rootSaga';
import { createReduxLoggerMiddleware } from './middlewares';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware, createReduxLoggerMiddleware())
);

sagaMiddleware.run(watcherSaga);
