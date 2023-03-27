import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'kaldereta',
    loadChildren: () => import('./pages/kaldereta/kaldereta.module').then( m => m.KalderetaPageModule)
  },
  {
    path: 'chickenadobo',
    loadChildren: () => import('./pages/chickenadobo/chickenadobo.module').then( m => m.ChickenadoboPageModule)
  },
  {
    path: 'karekare',
    loadChildren: () => import('./pages/karekare/karekare.module').then( m => m.KarekarePageModule)
  },
  {
    path: 'omelette',
    loadChildren: () => import('./pages/omelette/omelette.module').then( m => m.OmelettePageModule)
  },
  {
    path: 'spaghetti',
    loadChildren: () => import('./pages/spaghetti/spaghetti.module').then( m => m.SpaghettiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
