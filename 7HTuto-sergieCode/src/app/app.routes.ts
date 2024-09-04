import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', component: HomeComponent }
  {path: 'products', component: ProductsComponent }
  {path: 'product*:id', component: ProductDetailComponent }
  {path: 'contact', component: ContactComponent }
  {path: '**', redirectTo: '', pathMatch: 'full' }
];
