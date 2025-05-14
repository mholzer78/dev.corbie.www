import { Component, Input } from '@angular/core';

import { IconsComponent } from '../../shared/icons/icons.component';

@Component({
  selector: 'li[navItem]',
  imports: [IconsComponent],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
})
export class NavItemComponent {
  @Input() item!: any;
  @Input() showText!: boolean;
  @Input() active!: boolean;

  ngOnInit() {
  }
}
