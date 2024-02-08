// eslint-disable-next-line no-undef
const config = require('../config');

test('Should return code 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/12`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('Response Body should be empty', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/12`, {
			method: 'DELETE',
		});
	
		if (response.status !== 204) {
			actualResponseBody = await response.json();
		}
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody).toBeUndefined();
});