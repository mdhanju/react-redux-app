import { post } from '../xhr';
import _get from 'lodash/get';
import { showSpinner, hideSpinner } from './appActions';
import { updateUser } from './userActions';

export const EMAIL = 'EMAIL';
export const PASSWORD = 'PASSWORD';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';

export function updateEmail(value) {
	return {
		type: EMAIL,
		payload: { value }
	};
}

export function updatePassword(value) {
	return {
		type: PASSWORD,
		payload: { value }
	};
}

export function signInError(value) {
	return {
		type: SIGN_IN_ERROR,
		payload: { value }
	};
}

export function signInSuccess(value) {
	return {
		type: SIGN_IN_SUCCESS,
		payload: { value }
	};
}

export const signInUser = () => {
	return (dispatch, getState) => {
		const email = _get(getState().signIn, 'email');
		const password = _get(getState().signIn, 'password');

		const params = {
			email,
			password
		};
		dispatch(showSpinner());
		dispatch(signInError(null));
		return post('/users/login?include=user', params)
			.then(reponse => {
				if (reponse.user) {
					dispatch(updateUser(reponse));
					dispatch(signInSuccess('Signin sucessfull.'));
				}
				dispatch(hideSpinner());
			})
			.catch(err => {
				console.log(err);
				dispatch(signInError('Signin failed.'));
				dispatch(hideSpinner());
			});
	};
};
