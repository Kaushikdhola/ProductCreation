import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductFormModule } from './product-form/product-form.module';
import { NavigationModule } from './navigation/navigation.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductFormModule,NavigationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ProductCreation';
}