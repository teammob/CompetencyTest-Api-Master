# CompetencyTest-Api-Master

This API has been used as a wrapper api which has been called by UI to fetch or store data. <br />
This API calls 'https://restcountries.eu/rest/v1/region/Europe' to fetch countries.<br />
This API calls Java backend to store customer data. 

## Available Scripts

In the project directory, you can run:

### `yarn install`

Run this command to install all dependencies. 


### `yarn start`

Runs the app in the development mode.<br />
Call [http://localhost:3004/ready]
(http://localhost:3004/ready) to check whether app is running or not


### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

It creates dist file which will be used to bundle code.

### `yarn bundle`

It creates bundle folder for production.

### `yarn start:production`

If you want to start application for production you need to use this command


### Swagger File

Call [http://localhost:3004/docs]
http://localhost:3004/docs/ to view endpoints


### Endpoints

/api/save  To save customer data<br />
/api/countries To fetch countries<br />
/ready  to check whether app is running or not<br />
/docs to view swagger file<br />



