import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) }, { path: 'movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule) }, { path: 'mymovies', loadChildren: () => import('./pages/mymovies/mymovies.module').then(m => m.MymoviesModule) }, { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
