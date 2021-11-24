import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './rootSaga';
import { sagaMiddleware, logger } from './middlewares';
import { rootReducer } from './rootReducer';

export const appStore = () => {
	const store = configureStore({
		reducer: rootReducer,
		middleware: [sagaMiddleware, logger],
		preloadedState: {},
	});

	sagaMiddleware.run(rootSaga);
	return store;
};
