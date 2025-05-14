import { Component, OnInit, signal } from '@angular/core';

import { ClipboardComponent } from '../../shared/clipboard/clipboard.component';
import { siteBlueprint } from '../site.blueprint';

@Component({
  selector: 'section[colorConvert]',
  standalone: true,
  imports: [ClipboardComponent],
  templateUrl: './color-convert.component.html',
  styleUrl: './color-convert.component.scss',
})
export class ColorConvertComponent extends siteBlueprint implements OnInit {
  master = signal(new Array<boolean>(3));

  ngOnInit(): void {
    let storage = this.getStorage('color');
    this.master.update((value) => storage.master);
  }
}
