export const APP_BUSY = 'APP_BUSY';
export const APP_NOT_BUSY = 'APP_NOT_BUSY';

export function showSpinner(value) {
	return {
		type: APP_BUSY,
		payload: { value }
	};
}

export function hideSpinner(value) {
	return {
		type: APP_NOT_BUSY,
		payload: { value }
	};
}
