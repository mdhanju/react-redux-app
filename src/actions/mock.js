const user = {
	firstName: 'Maninder',
	lastName: 'Singh',
	age: '33',
	country: 'US',
	gender: 'Male',
	email: 'mdhanju@paypal.com',
	phone: '8184015296',
	id: '123456'
};
export function successCreateAcc() {
	return {
		status: 'OK',
		message: 'Account is created successfully.',
		user
	};
}

export function successSignIn() {
	return {
		status: 'OK',
		message: 'Log in is successfully.',
		user
	};
}

export function createUser(url, params = {}) {
	return new Promise((resolve, reject) => {
		if (params.firstName) {
			return setTimeout(() => resolve(successCreateAcc()), 1000);
		}
		return setTimeout(
			() =>
				reject({
					code: 422,
					message: 'The parameters provided are not valid.'
				}),
			1000
		);
	});
}

export function signIn(url, params = {}) {
	return new Promise((resolve, reject) => {
		const isEmailValid = params.email && params.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		if (isEmailValid) {
			return setTimeout(() => resolve(successSignIn()), 1000);
		}
		return setTimeout(
			() =>
				reject({
					code: 422,
					message: 'Please check your email and password.'
				}),
			1000
		);
	});
}
