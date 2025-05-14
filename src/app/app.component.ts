import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { allPages } from './environment';

@Component({
  selector: 'app-root',
  imports: [NavComponent, MainComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'codecorbie';
  activePage = allPages.filter((page) => page.id === 'home')[0];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActivePage(event.urlAfterRedirects.replace('/#', ''));
      }
    });
  }

  setActivePage(pageId: string) {
    this.activePage = allPages.filter((page) => page.id === pageId)[0];
  }
}
