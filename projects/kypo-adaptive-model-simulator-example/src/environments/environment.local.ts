// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration local` replaces `environment.ts` with `environment.local.ts`.
// The list of file replacements can be found in `angular.json`.

const HOME_URL = 'https://localhost:4200';

export const environment = {
  production: false,
  // OIDC SETTINGS
  // Url of the Identity Provider
  issuer: 'https://oidc.muni.cz/oidc/',
  // URL of the SPA to redirect the user after silent refresh
  silentRefreshRedirectUri: HOME_URL,
  // URL of the SPA to redirect the user to after login
  redirectUri: HOME_URL,
  // The SPA's id. The SPA is registered with this id at the config-server
  clientId: 'b53f2660-8fa0-4d32-94e4-23a59d7e7077',
  // set the scope for the permissions the client should request
  scope: 'openid profile email',
  sessionChecksEnabled: false,
  modelSimulatorConfig: {
    adaptiveTrainingServiceUrl: 'http://localhost:3000/kypo-adaptive-training/api/v1/',
  },
  authConfig: {
    guardMainPageRedirect: 'home',
    guardLoginPageRedirect: 'login',
    interceptorAllowedUrls: ['https://172.19.0.22', 'http://localhost', 'https://localhost'],
    authorizationStrategyConfig: {
      authorizationUrl: 'https://172.19.0.22/kypo-rest-user-and-group/api/v1/users/info',
    },
    providers: [
      {
        label: 'Login with MUNI',
        textColor: 'white',
        backgroundColor: '#002776',
        oidcConfig: {
          issuer: 'https://172.19.0.22:8443/csirtmu-dummy-issuer-server/',
          clientId: '9333e00b-b413-42ca-9aab-65cd2709dfdf',
          redirectUri: HOME_URL,
          scope: 'openid email profile',
          logoutUrl: 'https://172.19.0.22/csirtmu-dummy-issuer-server/endsession',
          postLogoutRedirectUri: HOME_URL,
          clearHashAfterLogin: true,
        },
      },
    ],
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
