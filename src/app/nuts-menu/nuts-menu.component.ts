import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-nuts-menu',
  standalone: true,
  imports: [CommonModule],  // Add CommonModule to the imports array
  templateUrl: './nuts-menu.component.html',
  styleUrls: ['./nuts-menu.component.css']
})
export class NutsMenuComponent {
  nuts = [
    { name: 'Almond', description: 'A healthy and delicious nut, great for snacking.', imageUrl: 'almonds.jpg' },
    { name: 'Walnut', description: 'Rich in omega-3 fatty acids, perfect for a healthy lifestyle.', imageUrl: 'walnuts.jpg' },
    { name: 'Cashew', description: 'Buttery and creamy, a favorite in many recipes.', imageUrl: 'cashews.jpg' },
    { name: 'Peanut', description: 'Classic and versatile, loved by everyone.', imageUrl: 'peanuts.jpg' }
  ];
}

