# KypoAdaptiveModelSimulator

### Running up the Project:
Install project dependencies:
```
$ npm install
```
Then run
```
$ ng serve --ssl
```
Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.

### How to use json-server as mock backend with provided dummy data

1.  Install json-server `npm install -g json-server`.
3.  Run the server with provided parameters `json-server -w ./utils/json-server/db.js --routes ./utils/json-server/routes.json --middlewares ./utils/json-server/server.js`.
4.  Run `npm install`.
5.  Run the app in local environment and ssl `ng serve --configuration local --ssl` and access it on `https://localhost:4200`.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build library

Run `npm run build-and-pack` to build and pack the project. The build artifacts and package will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.
