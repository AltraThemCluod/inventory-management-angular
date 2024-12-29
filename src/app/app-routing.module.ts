import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'manage-products', loadChildren: () => import('./components/products/manage-products/manage-products.module').then(m => m.ManageProductsModule) },
  { path: 'product-details', loadChildren: () => import('./components/products/product-details/product-details.module').then(m => m.ProductDetailsModule) },
  { path: '', loadChildren: () => import('./components/dashboard/dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
