import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './presentation/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './presentation/app.routes';
import { ApplicationConfig } from '@angular/core';
import { NovelRepository } from './domain/repositories/novel.repository';
import { NovelImplementationRepository } from './data/repositories/novel-implementation.repository';
import { provideHttpClient } from '@angular/common/http';
import { AuthRepository } from './domain/repositories/auth.repository';
import { AuthImplementationRepository } from './data/repositories/auth-implementation.repository';

const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: NovelRepository, useClass: NovelImplementationRepository },
    { provide: AuthRepository, useClass: AuthImplementationRepository },
  ],
};

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
