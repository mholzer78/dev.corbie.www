import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { IconsComponent } from '../../shared/icons/icons.component';

@Component({
  selector: 'li[navItem]',
  imports: [RouterLink, RouterLinkActive, IconsComponent],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
})
export class NavItemComponent {
  @Input() page!: any;
  @Input() showText!: boolean;

  ngOnInit() {}
}
