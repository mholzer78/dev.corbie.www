import { Component, model, ModelSignal } from '@angular/core';
import { allPages, Page } from '../environment';

@Component({
  selector: 'header[appHeader]',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activePage: ModelSignal<Page> = model.required();
  pages = allPages;
}
