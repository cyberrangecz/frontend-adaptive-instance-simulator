import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SentinelAuthProviderListComponent} from "@sentinel/auth/components";
import {SentinelNegativeAuthGuard} from "@sentinel/auth/guards";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: SentinelAuthProviderListComponent,
    canActivate: [SentinelNegativeAuthGuard],
  },
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
