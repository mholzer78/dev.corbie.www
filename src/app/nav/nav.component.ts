import { Component, input, model, ModelSignal } from '@angular/core';
import { NavItemComponent } from './nav-item/nav-item.component';
import { allPages, Page } from '../environment';
import { IconsComponent } from '../shared/icons/icons.component';

@Component({
  selector: 'nav[appNav]',
  standalone: true,
  imports: [NavItemComponent, IconsComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  activePage: ModelSignal<Page> = model.required();
  pages = allPages;

  showText = false;

  toggleNav(): void {
    this.showText = !this.showText;
  }

  toggleColor(): void {
    document.querySelector('body')!.classList.toggle("bright");
  }
}
