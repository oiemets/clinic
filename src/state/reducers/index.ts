import { AppState } from '../types';
import { combineReducers } from 'redux';
import { patients } from './patients';

export default combineReducers<AppState>({
	patients,
});
