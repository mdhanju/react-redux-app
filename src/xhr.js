import $ from 'jquery';
import { API_BASE_URL } from './constants';

export function get(endpoint, params = {}) {
	return new Promise((resolve, reject) => {
		$.get(`${API_BASE_URL}${endpoint}`, params)
			.done(response => {
				return resolve(response);
			})
			.fail(err => {
				return reject(err);
			});
	});
}

export function post(endpoint, params = {}) {
	return new Promise((resolve, reject) => {
		$.post(`${API_BASE_URL}${endpoint}`, params, response => {
			return resolve(response);
		}).fail(err => {
			return reject(err);
		});
	});
}
