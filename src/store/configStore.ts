import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './rootSaga';
import { sagaMiddleware, logger } from './middlewares';
import { rootReducer } from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authenticate } from 'modules';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [sagaMiddleware, logger],
	preloadedState: {},
});

export const persistor = persistStore(store, null, () => {
	store.dispatch(authenticate());
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
