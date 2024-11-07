import { Component } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})

export class ShoppingCartComponent {
  // Define shopping items array
  items = [
    { id: 1, name: 'Laptop', price: 1000, quantity: 1 },
    { id: 2, name: 'TV', price: 250, quantity: 5 },
  ];

  get totalCost() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Updates the quantity of an item in the array
  updateQuantity(itemId: number, quantity: number) {
    const item = this.items.find(i => i.id === itemId);
    if (item) item.quantity = quantity;
  }

  // Removes an item from the array
  removeItem(itemId: number) {
    this.items = this.items.filter(item => item.id !== itemId);
  }
}