import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AboutComponent } from './app/pages/about/about.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { HomeComponent } from './app/pages/home/home.component';
import { provideHttpClient } from "@angular/common/http";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'posts', loadChildren: () => import('./app/pages/posts/posts.module').then(m => m.PostsModule) },
  { path: '**', redirectTo: '/home' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideHttpClient()
  ]
})
  .catch((err) => console.error(err));