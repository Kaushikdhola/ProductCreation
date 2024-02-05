// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductFormModule } from './product-form/product-form.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    ProductFormModule,
    NavigationModule,
   ],
  bootstrap: [AppComponent],
})
export class AppModule { }
