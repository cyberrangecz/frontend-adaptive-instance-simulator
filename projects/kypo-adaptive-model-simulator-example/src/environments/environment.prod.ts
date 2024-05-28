// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration production` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const homeURL = 'https://localhost:4200';
export const baseURL = 'https://172.19.0.22';

export const environment = {
  production: true,
  modelSimulatorConfig: {
    adaptiveBasePath: baseURL + '/kypo-adaptive-training/api/v1/',
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
