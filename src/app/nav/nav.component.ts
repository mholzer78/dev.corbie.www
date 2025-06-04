import { Component, inject, OnDestroy, OnInit, output } from '@angular/core';
import { routes } from '../app.routes';
import { LocalStorageService } from '../local-storage.service';
import { NavItemComponent } from './nav-item/nav-item.component';
import { IconsComponent } from '../shared/icons/icons.component';

@Component({
  selector: 'nav[appNav]',
  standalone: true,
  imports: [NavItemComponent, IconsComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit, OnDestroy{
  changeDesign = output<boolean>();
  private localStorageService = inject(LocalStorageService);

  showText = true;
  darkMode = true;
  pages = routes;

  ngOnInit(): void {
    this.showText = this.localStorageService.getProp('main').showText;
    this.darkMode = this.localStorageService.getProp('main').darkMode;
    this.changeDesign.emit(this.darkMode);
  }

  ngOnDestroy(): void {
    this.store2storage();
  }

  store2storage() {
    this.localStorageService.setProp('main', {showText: this.showText, darkMode: this.darkMode});
  }

  toggleNav(): void {
    this.showText = !this.showText;
    this.store2storage();
  }

  toggleColor(): void {
    this.darkMode = !this.darkMode;
    this.changeDesign.emit(this.darkMode);
    this.store2storage();
  }
}
