import { FIRST_NAME, LAST_NAME, TOKEN, AGE, EMAIL, GENDER, COUNTRY, ACCOUNT_ID } from '../actions/userActions';

const defaultState = {
	firstName: '',
	lastName: '',
	token: '',
	age: '',
	email: '',
	gender: '',
	country: ''
};

export default function app(state = defaultState, action) {
	const { payload } = action;
	switch (action.type) {
		case FIRST_NAME:
			return {
				...state,
				firstName: payload.value
			};
		case LAST_NAME:
			return {
				...state,
				lastName: payload.value
			};
		case AGE:
			return {
				...state,
				age: payload.value
			};
		case EMAIL:
			return {
				...state,
				email: payload.value
			};
		case GENDER:
			return {
				...state,
				gender: payload.value
			};
		case TOKEN:
			return {
				...state,
				token: payload.value
			};
		case COUNTRY:
			return {
				...state,
				country: payload.value
			};
		case ACCOUNT_ID:
			return {
				...state,
				accountId: payload.value
			};
		default:
			return state;
	}
}
