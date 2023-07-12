import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'order-selection',
    pathMatch: 'full'
  },
  {
    path: 'item-information',
    loadChildren: () => import('./item-information/item-information.module').then( m => m.ItemInformationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main-screen',
    loadChildren: () => import('./main-screen/main-screen.module').then( m => m.MainScreenPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'order-selection',
    loadChildren: () => import('./order-selection/order-selection.module').then( m => m.OrderSelectionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
