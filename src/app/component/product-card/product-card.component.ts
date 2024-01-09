import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'

})
export class ProductCardComponent {
 @Input() productChild: any

}
