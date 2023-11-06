import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SentinelLayout1Module } from '@sentinel/layout/layout1';
import { SentinelAuthGuardWithLogin, SentinelNegativeAuthGuard } from '@sentinel/auth/guards';
import { SentinelAuthModule } from '@sentinel/auth';
import { environment } from '../environments/environment';
import { SentinelConfirmationDialogComponent } from '@sentinel/components/dialogs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SentinelLayout1Module,
    SentinelConfirmationDialogComponent,
    SentinelAuthModule.forRoot(environment.authConfig),
  ],
  providers: [SentinelAuthGuardWithLogin, SentinelNegativeAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
