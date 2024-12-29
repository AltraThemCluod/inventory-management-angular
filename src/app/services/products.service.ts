import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private ApiEndPoint = 'https://localhost:7057/api/Product/'

  constructor(private httpClient : HttpClient) { }

  //This method is use to get product all data
  getProductAllData(pageParam:any) : Observable<any>{
    const apiUrl = this.ApiEndPoint+"get-all-product"
    return this.httpClient.post<any>(apiUrl,pageParam);
  }

  //This method is use to create product
  createProductDetails(product:any){
    const apiUrl = this.ApiEndPoint+"create"
    return this.httpClient.post<any>(apiUrl,product);
  }

  //This method is use to update product
  updateProductDetails(product:any){
    const apiUrl = this.ApiEndPoint+"update"
    return this.httpClient.post<any>(apiUrl,product);
  }

  //This method is use to get product data by product id
  getProductData(productId:number){
    const apiUrl = this.ApiEndPoint+`get-product?Id=${productId}`
    return this.httpClient.get<any>(apiUrl);
  }
}
