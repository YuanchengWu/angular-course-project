import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() activeTab: EventEmitter<string> = new EventEmitter();
  onSelect(selection: string) {
    this.activeTab.emit(selection);
  }
}
