import { Component, computed, inject, OnInit, signal } from '@angular/core';

import { siteBlueprint } from '../site.blueprint';
import { ClipboardComponent } from '../../shared/clipboard/clipboard.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorConvertService } from './color-convert.service';

@Component({
  selector: 'section[colorConvert]',
  standalone: true,
  imports: [ClipboardComponent, ColorPickerComponent],
  templateUrl: './color-convert.component.html',
  styleUrl: './color-convert.component.scss',
})
export class ColorConvertComponent extends siteBlueprint implements OnInit {
  private colorConvertService = inject(ColorConvertService);
  //https://www.w3schools.com/colors/colors_converter.asp
  master = signal(new Array<number>(3));
  masterWebsafe = computed(() => this.master2Websafe());
  colorHEX = signal('000000');
  colorHEXWeb = signal('000000');
  colorRGB = signal('0,0,0');
  colorRGBWeb = signal('0,0,0');
  colorPicker = signal('#000000');
  colorPickerWeb = signal('#000000');
  colorCMYK = signal([0,0,0,0]);
  colorHSV = signal([0,0,0]);
  colorHSL = signal([0,0,0]);

  ngOnInit(): void {
    let storage = this.getStorage('color');
    this.master.update((value) => storage.master);
    this.master2all();
  }

  master2all() {
    this.colorHEX.update((value) =>
      this.master()
        .map((x) => x.toString(16).padStart(2, '0'))
        .join('')
    );
    this.colorHEXWeb.update((value) =>
      this.masterWebsafe()
        .map((x) => x.toString(16).padStart(2, '0'))
        .join('')
    );
    this.colorPicker.update((value) => '#' + this.colorHEX());
    this.colorPickerWeb.update((value) => '#' + this.colorHEXWeb());
    this.colorRGB.update((value) => this.master().join(','));
    this.colorRGBWeb.update((value) => this.masterWebsafe().join(','));
    this.colorCMYK.update(value => this.colorConvertService.rgbToCmyk(this.master()));
  }

  master2Websafe() {
    let websafe: number[] = [];
    this.master().forEach((item) => {
      websafe.push(Math.round(item / 51) * 51);
    });
    return websafe;
  }

}
