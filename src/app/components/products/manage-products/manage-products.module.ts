import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProductsRoutingModule } from './manage-products-routing.module';
import { ManageProductsComponent } from './manage-products.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ManageProductsComponent
  ],
  imports: [
    CommonModule,
    ManageProductsRoutingModule,
    NgxPaginationModule
  ]
})
export class ManageProductsModule { }
