// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration production` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const homeURL = 'https://localhost:4200';
export const baseURL = 'https://172.19.0.22';

export const environment = {
  production: true,
  modelSimulatorConfig: {
    adaptiveTrainingServiceUrl: baseURL + '/kypo-adaptive-training/api/v1/',
  },
  authConfig: {
    guardMainPageRedirect: 'home',
    guardLoginPageRedirect: 'login',
    interceptorAllowedUrls: [baseURL],
    authorizationStrategyConfig: {
      authorizationUrl: baseURL + '/kypo-rest-user-and-group/api/v1/users/info',
    },
    providers: [
      {
        label: 'Login with MUNI',
        textColor: 'white',
        backgroundColor: '#002776',
        oidcConfig: {
          issuer: 'https://172.19.0.22:443/csirtmu-dummy-issuer-server/',
          clientId: '0bf33f00-2700-4efb-ab09-186076f85c7d',
          redirectUri: homeURL,
          scope: 'openid email profile',
          logoutUrl: 'https://172.19.0.22/csirtmu-dummy-issuer-server/endsession',
          postLogoutRedirectUri: homeURL + '/logout-confirmed/',
          silentRefreshRedirectUri: homeURL + '/silent-refresh.html',
          clearHashAfterLogin: true,
        },
      },
    ],
  },
};
