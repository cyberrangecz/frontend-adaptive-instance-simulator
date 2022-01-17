// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration production` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const HOME_URL = 'https://localhost:4200';

export const environment = {
  production: true,
  // OIDC SETTINGS
  // Url of the Identity Provider
  issuer: 'https://oidc.muni.cz/oidc/',
  // URL of the SPA to redirect the user after silent refresh
  silentRefreshRedirectUri: HOME_URL,
  // URL of the SPA to redirect the user to after login
  redirectUri: HOME_URL,
  // set the scope for the permissions the client should request
  scope: 'openid profile email',
  sessionChecksEnabled: false,
  modelCalculatorConfig: {
    trainingBasePath: 'https://172.19.0.22/kypo-rest-training/api/v1/',
  },
  authConfig: {
    guardMainPageRedirect: 'home',
    guardLoginPageRedirect: 'login',
    interceptorAllowedUrls: ['https://172.19.0.22', 'http://localhost'],
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
          clientId: '0bf33f00-2700-4efb-ab09-186076f85c7d',
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
