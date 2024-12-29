import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-manage-products',
  standalone: false,
  
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {
  productData:any;
  itemsPerPage:number=25;
  currentPage: number = 1;
  totalRecord: number = 0;

  constructor(private productServices: ProductsService){}

  ngOnInit(){
    this.getProductAllData();
  }

  getProductAllData(){
    const requestParams = {
      search: '',
      offset: (this.currentPage-1) * this.itemsPerPage,
      limit: this.itemsPerPage,
      orderBy: '',
      columIndex: 0
    };

    console.log(requestParams);

    
    this.productServices.getProductAllData(requestParams).subscribe({
      next:(response)=>{
        this.productData = response.Values;
        this.totalRecord = response.TotalRecord;
        console.log(this.productData);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  pageChangeEvent(event: number){
    this.currentPage = event;
    this.getProductAllData();
  }

}
