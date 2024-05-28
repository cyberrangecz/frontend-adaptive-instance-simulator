// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration local` replaces `environment.ts` with `environment.local.ts`.
// The list of file replacements can be found in `angular.json`.

export const homeURL = 'https://localhost:4200';
export const baseURL = 'https://172.19.0.22';

export const environment = {
  production: false,
  modelSimulatorConfig: {
    adaptiveBasePath: 'http://localhost:3000/kypo-adaptive-training/api/v1/',
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
          requireHttps: true,
          issuer: baseURL + '/keycloak/realms/KYPO',
          clientId: 'KYPO-client',
          redirectUri: homeURL,
          scope: 'openid email profile offline_access',
          logoutUrl: baseURL + '/keycloak/realms/KYPO/protocol/openid-connect/logout',
          silentRefreshRedirectUri: baseURL + '/silent-refresh.html',
          postLogoutRedirectUri: homeURL + '/logout-confirmed',
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
