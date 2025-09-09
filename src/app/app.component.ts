import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    '[class.darkMode]': 'darkmode()'
  },
})
export class AppComponent implements OnInit {
  test = 'darkMode'
  darkmode = signal(true);
  ngOnInit() {console.debug("Hello Corbie")}

  changeDesign(value: boolean) {
    this.darkmode.set(value);
  }
}
