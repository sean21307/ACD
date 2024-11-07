import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})

export class CartItemComponent {
  // Item input variable which will be passed in by the parent ShoppingCart component
  @Input() item!: { id: number; name: string; price: number; quantity: number };

  // EventEmitters to let the ShoppingCart know when something changes
  @Output() quantityChange = new EventEmitter<number>();
  @Output() remove = new EventEmitter<void>();

  onQuantityChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newQuantity = Number(inputElement.value);

    // TODO: Emit the quantityChange emitter, passing in newQuantity
    
  }

  onRemove() {
    // TODO: emit the remove emitter
    
  }
}