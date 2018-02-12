import { APP_BUSY, APP_NOT_BUSY } from '../actions/appActions';

const defaultState = {
	appBusy: false
};

export default function app(state = defaultState, action) {
	switch (action.type) {
		case APP_BUSY:
			return {
				...state,
				appBusy: true
			};
		case APP_NOT_BUSY:
			return {
				...state,
				appBusy: false
			};
		default:
			return state;
	}
}
