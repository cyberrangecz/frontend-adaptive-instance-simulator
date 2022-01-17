import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentinelAuthProviderListComponent } from '@sentinel/auth/components';
import { SentinelAuthGuardWithLogin, SentinelNegativeAuthGuard } from '@sentinel/auth/guards';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./model-calculator-page/model-calculator-page/model-calculator-page.module').then(
        (m) => m.ModelCalculatorPageModule
      ),
    // canActivate: [SentinelAuthGuardWithLogin],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // {
  //   path: 'login',
  //   component: SentinelAuthProviderListComponent,
  //   canActivate: [SentinelNegativeAuthGuard],
  // },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
