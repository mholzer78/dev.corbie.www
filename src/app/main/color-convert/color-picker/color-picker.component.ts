import { Component, model } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  imports: [],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss',
})
export class ColorPickerComponent {
  color = model<string>('#000000');

  updateColor(event: Event) {
    this.color.update((value) => (event.target as HTMLInputElement).value);
  }
}
