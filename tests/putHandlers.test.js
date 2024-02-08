// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
  "productsList": [
    {
      "id": 6,
      "quantity": 1
    }
  ]
};

test('Status Code should be 200', async () => {
  let actualStatusCode;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders/6`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    actualStatusCode = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatusCode).toBe(200);
});

test('Actual response body warehouse should be...', async () => {
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders/6`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualResponseBody["wareHouse"]).toBe("Fresh Food");
});

test('Actual response body courier should be...', async () => {
  let actualResponseBody2;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders/6`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    actualResponseBody2 = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualResponseBody2["courierService"]).toBe("Order and Go");
});