import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PopUpComponent } from './component/pop-up/pop-up.component';

const routes: Routes = [
   { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'menu', loadChildren: './view/menu/menu.module#MenuPageModule' },
  { path: 'bill', loadChildren: './view/bill/bill.module#BillPageModule' },
  { path: 'pop-up', component: PopUpComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
