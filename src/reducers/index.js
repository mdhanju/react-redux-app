import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './appReducers';
import user from './userReducers';
import signUp from './signUpReducers';
import signIn from './signInReducers';
import funding from './fundingReducers';

const AppReducers = combineReducers({
	app,
	user,
	signIn,
	signUp,
	funding,
	routerReducer
});

export default AppReducers;
