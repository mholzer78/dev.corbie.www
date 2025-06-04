import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { siteBlueprint } from '../siteblueprint';
import { ClipboardComponent } from '../../shared/clipboard/clipboard.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorConvertService } from './color-convert.service';

@Component({
  selector: 'section[colorConvert]',
  standalone: true,
  imports: [FormsModule, ClipboardComponent, ColorPickerComponent],
  providers: [ColorConvertService],
  templateUrl: './color-convert.component.html',
  styleUrl: './color-convert.component.scss',
})
export class ColorConvertComponent
  extends siteBlueprint
  implements OnInit, OnDestroy
{
  private readonly colorConvertService = inject(ColorConvertService);
  master = signal(new Array<number>(3));
  names = this.colorConvertService.names;
  codes = this.colorConvertService.codes;

  colorHEX = signal('');
  colorRGB = signal('');
  colorHEXWeb = signal('');
  colorRGBWeb = signal('');
  colorPicker = signal('#37474f');
  colorPickerWeb = signal('#37474f');
  colorCMYK = signal(['', '', '', '']);
  colorHSV = signal(['', '', '']);
  colorHSL = signal(['', '', '']);
  colorHWB = signal('');
  colorName = signal('default');

  ngOnInit(): void {
    let storage = this.getStorage('color');
    this.master.set(storage.master);
    this.master2all();
  }

  ngOnDestroy(): void {
    this.store2storage();
  }

  store2storage() {
    this.setStorage('color', { master: this.master() });
  }
  master2all(exception?: string) {
    this.store2storage();
    if (exception !== 'HEX') {
      this.colorHEX.set(this.colorConvertService.rgb2hex(this.master()));
    }
    if (exception !== 'RGB') {
      this.colorRGB.set(this.master().join(','));
    }
    if (exception !== 'CMYK') {
      this.colorCMYK.set(this.colorConvertService.rgb2cmyk(this.master()));
    }
    if (exception !== 'HSV') {
      this.colorHSV.set(this.colorConvertService.rgb2hsv(this.master()));
    }
    if (exception !== 'HSL') {
      this.colorHSL.set(this.colorConvertService.rgb2hsl(this.master()));
    }
    if (exception !== 'HWB') {
      this.colorHWB.set(this.colorConvertService.rgb2hwb(this.master()));
    }
    this.colorHEXWeb.set(
      this.colorConvertService.rgb2hex(this.master2Websafe(this.master()))
    );
    this.colorRGBWeb.set(this.master2Websafe(this.master()).join(','));
    this.colorPicker.set('#' + this.colorConvertService.rgb2hex(this.master()));
    this.colorPickerWeb.set('#' + this.colorHEXWeb());
    if (
      this.codes.includes(
        this.colorConvertService.rgb2hex(this.master()).toLowerCase()
      )
    ) {
      this.colorName.set(
        this.colorConvertService.rgb2hex(this.master()).toLowerCase()
      );
    } else {
      this.colorName.set('default');
    }
  }

  master2Websafe(rgbArray: number[]) {
    let websafe: number[] = [];
    rgbArray.forEach((item) => {
      websafe.push(Math.round(item / 51) * 51);
    });
    return websafe;
  }

  clearAll(exception: string) {
    if (exception !== 'HEX') {
      this.colorHEX.set('');
    }
    if (exception !== 'RGB') {
      this.colorRGB.set('');
    }
    if (exception !== 'CMYK') {
      this.colorCMYK.set(['', '', '', '']);
    }
    if (exception !== 'HSV') {
      this.colorHSV.set(['', '', '']);
    }
    if (exception !== 'HSL') {
      this.colorHSL.set(['', '', '']);
    }
    if (exception !== 'HWB') {
      this.colorHWB.set('');
    }
    this.colorHEXWeb.set('');
    this.colorRGBWeb.set('');
    this.colorPicker.set('#37474f');
    this.colorPickerWeb.set('#37474f');
    this.colorName.set('default');
  }

  changeColorHandler(newColor: string): void;
  changeColorHandler(newColor: string, origin: string): void;
  changeColorHandler(newColor: string, origin?: string) {
    if (origin && newColor) {
      if (this.validate(origin, newColor)) {
        this.master2all(origin);
      } else {
        this.clearAll(origin);
      }
    } else {
      newColor = newColor.replace('#', '');
      this.master.set(this.colorConvertService.hex2rgb(newColor));
      this.master2all();
    }
  }

  validate(origin: string, newColor: string) {
    switch (origin) {
      case 'HEX': {
        return this.validateHEX(newColor);
      }
      case 'RGB': {
        return this.validateRGB(newColor);
      }
      case 'CMYK': {
        return this.validateCMYK(newColor);
      }
      case 'HWB':
      case 'HSV':
      case 'HSL': {
        let tempStringArray = newColor.replaceAll(/[^0-9,]/g, '').split(',');
        let tempNumberArray: number[] = [];
        let valid = true;
        tempStringArray.forEach((item, index) => {
          tempNumberArray.push(parseInt(item));
          if (
            item == '' ||
            parseInt(item) < 0 ||
            (index == 0 && parseInt(item) > 360) ||
            (index > 0 && parseInt(item) > 100)
          ) {
            valid = false;
          }
        });
        if (valid) {
          switch (origin) {
            case 'HWB':
              this.master.set(
                this.colorConvertService.hwb2rgb(tempNumberArray)
              );
              break;
            case 'HSV':
              this.master.set(
                this.colorConvertService.hsv2rgb(tempNumberArray)
              );
              break;
            case 'HSL':
              this.master.set(
                this.colorConvertService.hsl2rgb(tempNumberArray)
              );
              break;
          }
          return true;
        }
        break;
      }
    }
    return false;
  }

  validateHEX(newColor: string) {
    let regex = /^[0-9A-F]{6}$/i;
    if (regex.test(newColor)) {
      this.master.set(this.colorConvertService.hex2rgb(newColor));
      return true;
    }
    return false;
  }

  validateRGB(newColor: string) {
    let rgbStringArray = newColor.replaceAll(/[^0-9,]/g, '').split(',');
    let rgbNumberArray: number[] = [];
    let valid = true;
    if (rgbStringArray.length >= 3 && rgbStringArray[2] !== '') {
      for (let i = 0; i <= 2; i++) {
        valid =
          valid &&
          parseInt(rgbStringArray[i]) >= 0 &&
          parseInt(rgbStringArray[i]) <= 255;
        rgbNumberArray[i] = parseInt(rgbStringArray[i]);
      }
      if (valid) {
        this.master.set(rgbNumberArray);
        return true;
      }
    }
    return false;
  }

  validateCMYK(newColor: string) {
    let cmykStringArray = newColor.split(',');
    let cmykNumberArray: number[] = [];
    let valid = true;
    cmykStringArray.forEach((item) => {
      cmykNumberArray.push(parseInt(item));
      if (item == '' || parseInt(item) < 0 || parseInt(item) > 100) {
        valid = false;
      }
    });
    if (valid) {
      this.master.set(this.colorConvertService.cmyk2rgb(cmykNumberArray));
      return true;
    }
    return false;
  }
}
