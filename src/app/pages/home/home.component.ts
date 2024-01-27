import { Component, inject } from '@angular/core'; // khai bao inject
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { ProductCardComponent } from '../../component/product-card/product-card.component';
import { NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../types/Product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProductCardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productService = inject(ProductService);

  productList: Product[] = [];
  // Lifecycle Hooks Angular
  // https://viblo.asia/p/lifecycle-hooks-trong-angular-6J3Zgw8qZmB
  ngOnChanges() {
    console.log('1 -ngOnChanges');
  }

  ngOnInit(): void {
    console.log(' 2- ngOnInit');
  }
  ngDoCheck() {
    console.log('3 -ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('4 -ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('5 -ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('6 -ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('7 -ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('8- ngOnDestroy');
  }
}
