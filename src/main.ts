import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';  // Import appRoutes

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)]  // Use appRoutes here
});
