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
  master = signal(new Array<number>(3));
  colorHEX = signal('000000');
  colorRGB = signal('0,0,0');
  colorPicker = signal('#000000');
  colorPickerWebsafe = signal('#000000');

  ngOnInit(): void {
    let storage = this.getStorage('color');
    this.master.update((value) => storage.master);
    this.master2hex();
    this.master2rgb();
  }

  master2hex() {
    this.colorHEX.update(value => this.master().map(x => x.toString(16).padStart(2, "0")).join(""));
    this.colorPicker.update(value => '#' + this.colorHEX());
  }

  master2rgb() {
    this.colorRGB.update((value) => this.master().join(','));
  }
}
