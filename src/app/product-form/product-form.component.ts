import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})

export class ProductFormComponent {
  productData: any = {};
  onSubmit(){
    console.log(this.productData)
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log(file)
  }
}
