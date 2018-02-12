import { post, get } from '../xhr';
import _get from 'lodash/get';
import { showSpinner, hideSpinner } from './appActions';

export const ALL_CARDS = 'ALL_CARDS';
export const SELECTED_CARD = 'SELECTED_CARD';
export const CARD_NUMBER = 'CARD_NUMBER';
export const CARD_EXPIRY_MONTH = 'CARD_EXPIRY_MONTH';
export const CARD_EXPIRY_YEAR = 'CARD_EXPIRY_YEAR';
export const CARD_CVV = 'CARD_CVV';
export const CARD_NAME = 'CARD_NAME';
export const CARD_TYPE = 'CARD_TYPE';
export const CARD_ALIAS = 'CARD_ALIAS';
export const CARD_ADDRESS_ID = 'CARD_ADDRESS_ID';
export const ADD_CARD_ERROR = 'ADD_CARD_ERROR';
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export const SHOW_ADD_CARD_MODAL = 'SHOW_ADD_CARD_MODAL';
export const HIDE_ADD_CARD_MODAL = 'HIDE_ADD_CARD_MODAL';

export function getAllCards(value) {
	return {
		type: ALL_CARDS,
		payload: { value }
	};
}

export function selectedCard(value) {
	return {
		type: SELECTED_CARD,
		payload: { value }
	};
}

export function updateCardNumber(value) {
	return {
		type: CARD_NUMBER,
		payload: { value }
	};
}

export function updateCardExpiryMonth(value) {
	return {
		type: CARD_EXPIRY_MONTH,
		payload: { value }
	};
}

export function updateCardExpiryYear(value) {
	return {
		type: CARD_EXPIRY_YEAR,
		payload: { value }
	};
}

export function updateCardCvv(value) {
	return {
		type: CARD_CVV,
		payload: { value }
	};
}

export function updateCardType(value) {
	return {
		type: CARD_TYPE,
		payload: { value }
	};
}

export function updateCardName(value) {
	return {
		type: CARD_NAME,
		payload: { value }
	};
}

export function updateCardAlias(value) {
	return {
		type: CARD_ALIAS,
		payload: { value }
	};
}

export function updateCardAddressId(value) {
	return {
		type: CARD_ADDRESS_ID,
		payload: { value }
	};
}

export function addCardError(value) {
	return {
		type: ADD_CARD_ERROR,
		payload: { value }
	};
}

export function addCardSuccess(value) {
	return {
		type: ADD_CARD_SUCCESS,
		payload: { value }
	};
}

export function showAddCardModal(value) {
	return {
		type: SHOW_ADD_CARD_MODAL,
		payload: { value }
	};
}

export function hideAddCardModal(value) {
	return {
		type: HIDE_ADD_CARD_MODAL,
		payload: { value }
	};
}


export const getCards = () => {
	return (dispatch, getState) => {
		const email = _get(getState().signIn, 'email');
		const password = _get(getState().signIn, 'password');
		const userId = _get(getState().user, 'accountId');

		const params = {
			email,
			password
		};
		dispatch(showSpinner());
		dispatch(addCardError(null));

		return get(`/users/${userId}/funding`, params)
			.then(reponse => {
				if (reponse) {
					// dispatch(getAllCards(reponse));
					// dispatch(addCardSuccess(reponse));
				}
				dispatch(hideSpinner());
			})
			.catch(err => {
				console.log(err);
				dispatch(addCardError('Signin failed.'));
				dispatch(hideSpinner());
			});
	};
};
