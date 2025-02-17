import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SentinelAuthModule } from '@sentinel/auth';
import { environment } from '../environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentinelAuthModule.forRoot(environment.authConfig), AppRoutingModule],
      providers: [provideHttpClient(), provideHttpClientTesting()],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'adaptive-model-simulator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('adaptive-model-simulator');
  });
});
