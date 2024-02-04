// product-form.module.ts

import { NgModule } from '@angular/core';
import { ProductFormComponent } from './product-form.component';
import { NavigationModule } from '../navigation/navigation.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductFormComponent],
  exports: [ProductFormComponent],
  imports:[NavigationModule,
    FormsModule,
  ],  
})
export class ProductFormModule {}
