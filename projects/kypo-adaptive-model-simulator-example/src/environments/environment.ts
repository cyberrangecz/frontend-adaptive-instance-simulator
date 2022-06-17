// This file can be replaced during build by using the `fileReplacements` array.
// The list of file replacements can be found in `angular.json`.

export const homeURL = 'https://localhost:4200';
export const baseURL = 'https://172.19.0.22';

export const environment = {
  production: false,
  modelSimulatorConfig: {
    adaptiveTrainingServiceUrl: 'http://localhost:8082/kypo-adaptive-training/api/v1/',
  },
  authConfig: {
    guardMainPageRedirect: 'home',
    guardLoginPageRedirect: 'login',
    interceptorAllowedUrls: [baseURL, 'http://localhost', 'https://localhost'],
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
          clientId: 'vvlHtZkuJdtdhBJjOoGvvpqghjBrLFTziPLE',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
