import { Middleware } from 'redux';

const createReduxLoggerMiddleware: () => Middleware = () => {
	if (process.env.NODE_ENV !== 'production') {
		const { createLogger } = require('redux-logger');
		return createLogger({
			duration: true,
			timestamp: false,
			diff: true,
			collapsed: true,
		});
	}
	return () => next => action => next(action);
};

export const logger = createReduxLoggerMiddleware();
