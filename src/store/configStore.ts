import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './rootSaga';
import { sagaMiddleware, logger } from './middlewares';
import { rootReducer } from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const appStore = () => {
	const store = configureStore({
		reducer: persistedReducer,
		middleware: [sagaMiddleware, logger],
		preloadedState: {},
	});

	const persistor = persistStore(store);

	sagaMiddleware.run(rootSaga);
	return { store, persistor };
};
