import { Component,ViewChild, ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})

export class ProductFormComponent {
  @ViewChild('productForm', { static: false }) productForm!: NgForm;
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;


  constructor(private snackBar: MatSnackBar) {}

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
      
      if (this.areRequiredFieldsFilled()) {
        this.showMessage('Form submitted successfully!');
        console.log(this.productForm.value);
        console.log(this.selectedFiles);
        this.productForm.reset();
        this.resetFileInput();
        this.selectedFiles = [];

      } else {
        this.showMessage('Please fill in all required fields, and select at least one image!');
      }
    } else {
      this.showMessage('Please fill in all required fields, and select at least one image.');
    }
  }

  areRequiredFieldsFilled(): boolean {
    return (
      this.productForm.value.productName &&
      this.productForm.value.productDesc &&
      this.productForm.value.bid &&
      this.productForm.value.category &&
      this.productForm.value.city &&
      this.productForm.value.province &&
      this.selectedFiles.length > 0
    );
  }


  onFileSelected(event: any) {
    if (this.productForm.valid) {
        const inputElement: HTMLInputElement = event.target;
        if (inputElement.files) {
            for (let i = 0; i < inputElement.files.length; i++) {
                this.selectedFiles.push(inputElement.files[i]);
            }
          }
    }
  }

  resetFileInput() {
    const fileInput = this.fileInput.nativeElement as HTMLInputElement;
    fileInput.value = '';
  }

  showMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000, 
    });
  }
}