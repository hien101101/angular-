import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts(categoryId?: number, searchQuery?: string) {
    let url = 'api/products';
    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }
    if (searchQuery) {
      url += `&searchQuery=${searchQuery}`;
    }
    return this.http.get<Product[]>(url);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`api/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post('api/products', product);
  }

  updateProduct(product: Product) {
    return this.http.put(`api/products/${product.id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`api/products/${id}`);
  }
}
