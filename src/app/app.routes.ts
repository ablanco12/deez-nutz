import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NutsMenuComponent } from './nuts-menu/nuts-menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const appRoutes: Routes = [  // Export as appRoutes
  { path: '', component: HomeComponent },
  { path: 'nuts-menu', component: NutsMenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
