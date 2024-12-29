import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(
    private productServices: ProductsService,
    private router: Router,
    private route : ActivatedRoute
  ){}

  productForm: FormGroup = new FormGroup({
    Id: new FormControl(0),
    Name: new FormControl("",[Validators.required]),
    SKU: new FormControl("",[Validators.required]),
    Price: new FormControl("",[Validators.required,Validators.min(1)]),
    Quantity: new FormControl("",[Validators.required,Validators.min(1)]),
    Description: new FormControl(),
  });

  ngOnInit(){
    const params = this.route.snapshot.queryParamMap;

    const productId = Number(params.get('id'));

    if(productId > 0){
      this.getProductData(productId)
    }
  }


  saveProduct(){
    if(this.productForm.invalid){
      return this.productForm.markAllAsTouched();
    }
    else{
      if(this.productForm.value.Id > 0){
        this.productServices.updateProductDetails(this.productForm.value).subscribe({
          next:(response)=>{
            console.log(response);
            if(response.Code == 200){
              this.router.navigate(["/manage-products"])
            }
          },
          error:(error)=>{
            console.log(error);
          }
        })
      }
      else{
        this.productServices.createProductDetails(this.productForm.value).subscribe({
          next:(response)=>{
            console.log(response);
            if(response.Code == 200){
              this.router.navigate(["/manage-products"])
            }
          },
          error:(error)=>{
            console.log(error);
          }
        })
      }
    }
  }

  getProductData(productId:number){
    this.productServices.getProductData(productId).subscribe({
      next:(response)=>{
        console.log(response);
        if(response.Code == 200){
          this.productForm = new FormGroup({
            Id: new FormControl(response.Value.Id),
            Name: new FormControl(response.Value.Name),
            SKU: new FormControl(response.Value.SKU),
            Price: new FormControl(response.Value.Price),
            Quantity: new FormControl(response.Value.Quantity),
            Description: new FormControl(response.Value.Description),
          });
        }
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
}
