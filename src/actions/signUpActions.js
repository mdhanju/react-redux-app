import { post } from '../xhr';
import _get from 'lodash/get';
import { showSpinner, hideSpinner } from './appActions';

export const SIGNUP_USER_AGE = 'SIGNUP_USER_AGE';
export const SIGNUP_USER_EMAIL = 'SIGNUP_USER_EMAIL';
export const SIGNUP_USER_PASSWORD = 'SIGNUP_USER_PASSWORD';
export const SIGNUP_USER_GENDER = 'SIGNUP_USER_GENDER';
export const SIGNUP_USER_COUNTRY = 'SIGNUP_USER_COUNTRY';
export const SIGNUP_USER_LAST_NAME = 'SIGNUP_USER_LAST_NAME';
export const SIGNUP_USER_FIRST_NAME = 'SIGNUP_USER_FIRST_NAME';
export const SIGNUP_USER_CREATE_ACCOUNT_ERROR = 'SIGNUP_USER_CREATE_ACCOUNT_ERROR';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';

export function updateFirstName(value) {
	return {
		type: SIGNUP_USER_FIRST_NAME,
		payload: { value }
	};
}

export function updateLastName(value) {
	return {
		type: SIGNUP_USER_LAST_NAME,
		payload: { value }
	};
}

export function updateAge(value) {
	return {
		type: SIGNUP_USER_AGE,
		payload: { value }
	};
}

export function updateGender(value) {
	return {
		type: SIGNUP_USER_GENDER,
		payload: { value }
	};
}

export function updateEmail(value) {
	return {
		type: SIGNUP_USER_EMAIL,
		payload: { value }
	};
}

export function updatePassword(value) {
	return {
		type: SIGNUP_USER_PASSWORD,
		payload: { value }
	};
}

export function updateCountry(value) {
	return {
		type: SIGNUP_USER_COUNTRY,
		payload: { value }
	};
}

export function createAccountSuccess(value) {
	return {
		type: CREATE_ACCOUNT_SUCCESS,
		payload: { value }
	};
}

export function createAccountError(value) {
	return {
		type: SIGNUP_USER_CREATE_ACCOUNT_ERROR,
		payload: { value }
	};
}

export const createAccount = () => {
	return (dispatch, getState) => {
		const firstName = _get(getState().signUp, 'firstName');
		const lastName = _get(getState().signUp, 'lastName');
		const age = _get(getState().signUp, 'age');
		const email = _get(getState().signUp, 'email');
		const password = _get(getState().signUp, 'password');
		const gender = _get(getState().signUp, 'gender');
		const country = _get(getState().signUp, 'country');

		const params = {
			age,
			email,
			password,
			gender,
			country,
			lastName,
			firstName,
			userrole: 'admin'
		};
		dispatch(showSpinner());
		dispatch(createAccountError(null));
		return post('/users', params)
			.then(reponse => {
				if (reponse && reponse.id) {
					dispatch(createAccountSuccess('Account is created sucessfully.'));
				}
				dispatch(hideSpinner());
			})
			.catch(err => {
				dispatch(createAccountError('Account create failed.'));
				dispatch(hideSpinner());
			});
	};
};
