import {
	SIGNUP_USER_FIRST_NAME,
	SIGNUP_USER_LAST_NAME,
	SIGNUP_USER_AGE,
	SIGNUP_USER_EMAIL,
	SIGNUP_USER_PASSWORD,
	SIGNUP_USER_GENDER,
	SIGNUP_USER_COUNTRY,
	SIGNUP_USER_CREATE_ACCOUNT_ERROR,
	CREATE_ACCOUNT_SUCCESS
} from '../actions/signUpActions';

const defaultState = {
	firstName: '',
	lastName: '',
	age: '',
	email: '',
	gender: '',
	country: 'US',
	createAccountError: null,
	createAccountSuccess: null
};

export default function signUp(state = defaultState, action) {
	const { payload } = action;
	switch (action.type) {
		case SIGNUP_USER_FIRST_NAME:
			return {
				...state,
				firstName: payload.value
			};
		case SIGNUP_USER_LAST_NAME:
			return {
				...state,
				lastName: payload.value
			};
		case SIGNUP_USER_AGE:
			return {
				...state,
				age: payload.value
			};
		case SIGNUP_USER_EMAIL:
			return {
				...state,
				email: payload.value
			};
		case SIGNUP_USER_PASSWORD:
			return {
				...state,
				password: payload.value
			};
		case SIGNUP_USER_GENDER:
			return {
				...state,
				gender: payload.value
			};
		case SIGNUP_USER_COUNTRY:
			return {
				...state,
				country: payload.value
			};
		case SIGNUP_USER_CREATE_ACCOUNT_ERROR:
			return {
				...state,
				createAccountError: payload.value
			};
		case CREATE_ACCOUNT_SUCCESS:
			return {
				...state,
				createAccountSuccess: payload.value
			};
		default:
			return state;
	}
}
