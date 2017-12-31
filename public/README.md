# Auth0 jQuery Passwordless SPA Samples

This set of samples shows how you can use passwordless authentication in your single page application. There are samples for both SMS and Email connections, using the Auth0 Lock widget as well as a custom UI alongside auth0.js SDK.

## Key Features

Single Page Passwordless samples include:

* Login with a **one time code** via **sms** using **Lock**
* Login with a **one time code** via **email** using **Lock**
* Login with a **magic link** via **email** using **Lock**
* Login with a **one time code** via **sms** using your **own UI and auth0.js**
* Login with a **one time code** via **email** using your **own UI and auth0.js**
* Login with a **magic link** via **email** using your **own UI and auth0.js**

You can read more about Passwordless Authentication on our [documentation Site](https://auth0.com/docs/connections/passwordless), where you will find the complete Single Page App tutorials for:

* [Authenticate users with a one time code via SMS](https://auth0.com/docs/connections/passwordless/spa-sms)
* [Authenticate users with a one time code via Email](https://auth0.com/docs/connections/passwordless/spa-email-code)
* [Authenticate users with a magic link via Email](https://auth0.com/docs/connections/passwordless/spa-email-link)

## Install locally

1. Update content of the `auth0-variables.js` file with your Auth0 credentials:
	```js
	var AUTH0_CLIENT_ID='{CLIENT_ID}';
	var AUTH0_DOMAIN='{DOMAIN}';
	```
	> You can get the `{CLIENT_ID}` and `{DOMAIN}` values from the [Auth0 Dashboard](https://manage.auth0.com).

2. In your App's configuration on the [Auth0 Dashboard](https://manage.auth0.com), add `http://localhost:3000` to the **Allowed Origins (CORS)** list in order for the one time code samples to work, and add `http://localhost:3000/custom-magic-link.html, http://localhost:3000/lock-magic-link.html, http://localhost:3000/lock-sms.html, http://localhost:3000/lock-email-code.html` to the **Allowed Callback URLs** list for the magic link samples to function. 
3. Initialize a web server in the samples folder. You can do it for instance with `serve`:
	* Install node version 6 (using `nvm`)
	* run `npm install -g serve`
	* run `serve -p 3000` in the project's folder to start a server
4. Go to the [index page](http://localhost:3000) and select the scenario you want to try. 
