import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})

export class ProductFormComponent {
  productData: any = {};
  selectedFiles: File[] = [];


  @ViewChild('productForm', { static: false }) productForm!: NgForm;

  onSubmit(productForm: NgForm){
    console.log(this.productData)
    this.productForm.resetForm();
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
