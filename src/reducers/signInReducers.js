import { EMAIL, PASSWORD, SIGN_IN_ERROR, SIGN_IN_SUCCESS } from '../actions/signInActions';

const defaultState = {
	email: '',
	password: '',
	signInError: null,
	signInuccess: null
};

export default function logIn(state = defaultState, action) {
	const { payload } = action;
	switch (action.type) {
		case EMAIL:
			return {
				...state,
				email: payload.value
			};
		case PASSWORD:
			return {
				...state,
				password: payload.value
			};
		case SIGN_IN_ERROR:
			return {
				...state,
				signInError: payload.value
			};
		case SIGN_IN_SUCCESS:
			return {
				...state,
				signInSuccess: payload.value
			};
		default:
			return state;
	}
}
