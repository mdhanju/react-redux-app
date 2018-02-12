import {
	ALL_CARDS,
	SELECTED_CARD,
	CARD_NUMBER,
	CARD_EXPIRY_MONTH,
	CARD_EXPIRY_YEAR,
	CARD_CVV,
	CARD_NAME,
	CARD_TYPE,
	CARD_ALIAS,
	CARD_ADDRESS_ID,
	ADD_CARD_ERROR,
	ADD_CARD_SUCCESS,
	SHOW_ADD_CARD_MODAL,
	HIDE_ADD_CARD_MODAL
} from '../actions/fundingActions';

const defaultState = {
	cardnumber: '',
	expiryMonth: '',
	expiryYear: '',
	expiryCvv: '',
	addressId: '',
	show: false,
	allCards: [],
	selectedCard: {}
};

export default function app(state = defaultState, action) {
	const { payload } = action;
	switch (action.type) {
		case SHOW_ADD_CARD_MODAL:
			return {
				...state,
				show: true
			};
		case HIDE_ADD_CARD_MODAL:
			return {
				...state,
				show: false
			};
		case ALL_CARDS:
			return {
				...state,
				allCards: false
			};
		case SELECTED_CARD:
			return {
				...state,
				selectedCard: false
			};
		default:
			return state;
	}
}
