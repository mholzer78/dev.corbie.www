import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [],
  templateUrl: './icons.component.svg',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {
  image = input.required();
  width = input.required();
  height = input.required();
}
