import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.css']
})
export class CitySelectorComponent {
  selectedCity: string = '';
  today: number = Date.now();


  @Output() citySelected = new EventEmitter<string>();

  submitCity() {
    if (this.selectedCity.trim()) {
      this.citySelected.emit(this.selectedCity.trim());
      this.selectedCity = '';
    }
  }
}
