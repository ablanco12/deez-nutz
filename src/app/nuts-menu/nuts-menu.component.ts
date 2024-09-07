import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define the Nut interface
interface Nut {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-nuts-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nuts-menu.component.html',
  styleUrls: ['./nuts-menu.component.css']
})
export class NutsMenuComponent {
  // Define the nuts array using the Nut interface
  nuts: Nut[] = [
    { id: 1, name: 'Almond', description: 'A healthy and delicious nut, great for snacking.', imageUrl: 'almonds.jpg' },
    { id: 2, name: 'Walnut', description: 'Rich in omega-3 fatty acids, perfect for a healthy lifestyle.', imageUrl: 'walnuts.jpg' },
    { id: 3, name: 'Cashew', description: 'Buttery and creamy, a favorite in many recipes.', imageUrl: 'cashews.jpg' },
    { id: 4, name: 'Peanut', description: 'Classic and versatile, loved by everyone.', imageUrl: 'peanuts.jpg' }
  ];

  // Cart array to store selected items
  cart: Nut[] = [];

  // Method to add a nut to the cart
  addToCart(nut: Nut): void {
    // Check if the item is already in the cart
    const itemInCart = this.cart.find(item => item.id === nut.id);

    if (!itemInCart) {
      this.cart.push(nut); // Add nut to the cart
      alert(`${nut.name} has been added to your cart!`);
    } else {
      alert(`${nut.name} is already in your cart!`);
    }
  }
}
