export const AGE = 'AGE';
export const EMAIL = 'EMAIL';
export const GENDER = 'GENDER';
export const COUNTRY = 'COUNTRY';
export const TOKEN = 'TOKEN';
export const LAST_NAME = 'LAST_NAME';
export const FIRST_NAME = 'FIRST_NAME';
export const ACCOUNT_ID = 'ACCOUNT_ID';

export function updateFirstName(value) {
	return {
		type: FIRST_NAME,
		payload: { value }
	};
}

export function updateLastName(value) {
	return {
		type: LAST_NAME,
		payload: { value }
	};
}

export function updateAge(value) {
	return {
		type: AGE,
		payload: { value }
	};
}

export function updateGender(value) {
	return {
		type: GENDER,
		payload: { value }
	};
}

export function updateEmail(value) {
	return {
		type: EMAIL,
		payload: { value }
	};
}

export function updateCountry(value) {
	return {
		type: COUNTRY,
		payload: { value }
	};
}

export function updateAccountId(value) {
	return {
		type: ACCOUNT_ID,
		payload: { value }
	};
}

export function updateToken(value) {
	return {
		type: TOKEN,
		payload: { value }
	};
}

export function updateUser(value) {
	const { id, user = {} } = value;
	return (dispatch, getState) => {
		dispatch(updateFirstName(user.firstName));
		dispatch(updateLastName(user.lastName));
		dispatch(updateAge(user.age));
		dispatch(updateGender(user.gender));
		dispatch(updateEmail(user.email));
		dispatch(updateCountry(user.country));
		dispatch(updateAccountId(user.id));
		dispatch(updateToken(id));
	};
}
