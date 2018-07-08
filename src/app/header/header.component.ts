import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() activeTab: EventEmitter<string> = new EventEmitter();
  onRecipes() {
    this.activeTab.emit('recipes');
  }

  onShoppingList() {
    this.activeTab.emit('shopping list');
  }
}
