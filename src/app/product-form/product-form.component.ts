import { Component,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})

export class ProductFormComponent {
  @ViewChild('productForm', { static: false }) productForm!: NgForm;
  

  productData: any = {
    productName: '',  
    productDesc: '',
    bid: null,
    category: '',
    city: '',
    province: '',
  };
  selectedFiles: File[] = [];


  onSubmit(){
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      
      // this.toastr.success('Form submitted successfully!');
      this.productForm.reset();
    } else {
      // this.toastr.error('Please fill in all required fields.');
    }
  }

  onFileSelected(event: any) {
    const inputElement: HTMLInputElement = event.target;
    if (inputElement.files) {
      for (let i = 0; i < inputElement.files.length; i++) {
        this.selectedFiles.push(inputElement.files[i]);
      }
    }
    console.log(this.selectedFiles)

    const fileInput: HTMLInputElement | null = document.getElementById('myFile') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }
}
