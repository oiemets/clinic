import { configureStore } from '@reduxjs/toolkit';
import { watcherSaga } from './rootSaga';
import { sagaMiddleware, logger } from './middlewares';
import { patientsReducer } from '../modules';

export const appStore = () => {
	const store = configureStore({
		reducer: {
			patients: patientsReducer,
		},
		middleware: [sagaMiddleware, logger],
		preloadedState: {},
	});

	sagaMiddleware.run(watcherSaga);
	return store;
};
