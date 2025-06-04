export class ColorConvertService {
  //  https://www.w3schools.com/colors/colors_converter.asp
  //  https://www.w3schools.com/lib/w3color.js
  names = [
    'AliceBlue',
    'AntiqueWhite',
    'Aqua',
    'Aquamarine',
    'Azure',
    'Beige',
    'Bisque',
    'Black',
    'BlanchedAlmond',
    'Blue',
    'BlueViolet',
    'Brown',
    'BurlyWood',
    'CadetBlue',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'CornflowerBlue',
    'Cornsilk',
    'Crimson',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGoldenRod',
    'DarkGray',
    'DarkGrey',
    'DarkGreen',
    'DarkKhaki',
    'DarkMagenta',
    'DarkOliveGreen',
    'DarkOrange',
    'DarkOrchid',
    'DarkRed',
    'DarkSalmon',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'DarkSlateGray',
    'DarkSlateGrey',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DimGray',
    'DimGrey',
    'DodgerBlue',
    'FireBrick',
    'FloralWhite',
    'ForestGreen',
    'Fuchsia',
    'Gainsboro',
    'GhostWhite',
    'Gold',
    'GoldenRod',
    'Gray',
    'Grey',
    'Green',
    'GreenYellow',
    'HoneyDew',
    'HotPink',
    'IndianRed',
    'Indigo',
    'Ivory',
    'Khaki',
    'Lavender',
    'LavenderBlush',
    'LawnGreen',
    'LemonChiffon',
    'LightBlue',
    'LightCoral',
    'LightCyan',
    'LightGoldenRodYellow',
    'LightGray',
    'LightGrey',
    'LightGreen',
    'LightPink',
    'LightSalmon',
    'LightSeaGreen',
    'LightSkyBlue',
    'LightSlateGray',
    'LightSlateGrey',
    'LightSteelBlue',
    'LightYellow',
    'Lime',
    'LimeGreen',
    'Linen',
    'Magenta',
    'Maroon',
    'MediumAquaMarine',
    'MediumBlue',
    'MediumOrchid',
    'MediumPurple',
    'MediumSeaGreen',
    'MediumSlateBlue',
    'MediumSpringGreen',
    'MediumTurquoise',
    'MediumVioletRed',
    'MidnightBlue',
    'MintCream',
    'MistyRose',
    'Moccasin',
    'NavajoWhite',
    'Navy',
    'OldLace',
    'Olive',
    'OliveDrab',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleGoldenRod',
    'PaleGreen',
    'PaleTurquoise',
    'PaleVioletRed',
    'PapayaWhip',
    'PeachPuff',
    'Peru',
    'Pink',
    'Plum',
    'PowderBlue',
    'Purple',
    'RebeccaPurple',
    'Red',
    'RosyBrown',
    'RoyalBlue',
    'SaddleBrown',
    'Salmon',
    'SandyBrown',
    'SeaGreen',
    'SeaShell',
    'Sienna',
    'Silver',
    'SkyBlue',
    'SlateBlue',
    'SlateGray',
    'SlateGrey',
    'Snow',
    'SpringGreen',
    'SteelBlue',
    'Tan',
    'Teal',
    'Thistle',
    'Tomato',
    'Turquoise',
    'Violet',
    'Wheat',
    'White',
    'WhiteSmoke',
    'Yellow',
    'YellowGreen',
  ];
  codes = [
    'f0f8ff',
    'faebd7',
    '00ffff',
    '7fffd4',
    'f0ffff',
    'f5f5dc',
    'ffe4c4',
    '000000',
    'ffebcd',
    '0000ff',
    '8a2be2',
    'a52a2a',
    'deb887',
    '5f9ea0',
    '7fff00',
    'd2691e',
    'ff7f50',
    '6495ed',
    'fff8dc',
    'dc143c',
    '00ffff',
    '00008b',
    '008b8b',
    'b8860b',
    'a9a9a9',
    'a9a9a9',
    '006400',
    'bdb76b',
    '8b008b',
    '556b2f',
    'ff8c00',
    '9932cc',
    '8b0000',
    'e9967a',
    '8fbc8f',
    '483d8b',
    '2f4f4f',
    '2f4f4f',
    '00ced1',
    '9400d3',
    'ff1493',
    '00bfff',
    '696969',
    '696969',
    '1e90ff',
    'b22222',
    'fffaf0',
    '228b22',
    'ff00ff',
    'dcdcdc',
    'f8f8ff',
    'ffd700',
    'daa520',
    '808080',
    '808080',
    '008000',
    'adff2f',
    'f0fff0',
    'ff69b4',
    'cd5c5c',
    '4b0082',
    'fffff0',
    'f0e68c',
    'e6e6fa',
    'fff0f5',
    '7cfc00',
    'fffacd',
    'add8e6',
    'f08080',
    'e0ffff',
    'fafad2',
    'd3d3d3',
    'd3d3d3',
    '90ee90',
    'ffb6c1',
    'ffa07a',
    '20b2aa',
    '87cefa',
    '778899',
    '778899',
    'b0c4de',
    'ffffe0',
    '00ff00',
    '32cd32',
    'faf0e6',
    'ff00ff',
    '800000',
    '66cdaa',
    '0000cd',
    'ba55d3',
    '9370db',
    '3cb371',
    '7b68ee',
    '00fa9a',
    '48d1cc',
    'c71585',
    '191970',
    'f5fffa',
    'ffe4e1',
    'ffe4b5',
    'ffdead',
    '000080',
    'fdf5e6',
    '808000',
    '6b8e23',
    'ffa500',
    'ff4500',
    'da70d6',
    'eee8aa',
    '98fb98',
    'afeeee',
    'db7093',
    'ffefd5',
    'ffdab9',
    'cd853f',
    'ffc0cb',
    'dda0dd',
    'b0e0e6',
    '800080',
    '663399',
    'ff0000',
    'bc8f8f',
    '4169e1',
    '8b4513',
    'fa8072',
    'f4a460',
    '2e8b57',
    'fff5ee',
    'a0522d',
    'c0c0c0',
    '87ceeb',
    '6a5acd',
    '708090',
    '708090',
    'fffafa',
    '00ff7f',
    '4682b4',
    'd2b48c',
    '008080',
    'd8bfd8',
    'ff6347',
    '40e0d0',
    'ee82ee',
    'f5deb3',
    'ffffff',
    'f5f5f5',
    'ffff00',
    '9acd32',
  ];

  //HEX
  rgb2hex(rgb: number[]) {
    return rgb.map((x) => x.toString(16).padStart(2, '0')).join('');
  }
  hex2rgb(hex: string) {
    let hexInt = parseInt(hex, 16);
    let r = (hexInt >> 16) & 255;
    let g = (hexInt >> 8) & 255;
    let b = hexInt & 255;
    return [r, g, b];
  }

  //CMYK
  /*
   * CMYK Convert
   * https://www.standardabweichung.de/code/javascript/cmyk-rgb-conversion-javascript
   * https://www.standardabweichung.de/code/javascript/rgb-cmyk-conversion-javascript
   */
  cmyk2rgb = (color: number[], normalized?: boolean) => {
    let c = color[0] / 100;
    let m = color[1] / 100;
    let y = color[2] / 100;
    let k = color[3] / 100;

    c = c * (1 - k) + k;
    m = m * (1 - k) + k;
    y = y * (1 - k) + k;

    let r = 1 - c;
    let g = 1 - m;
    let b = 1 - y;

    if (!normalized) {
      r = Math.round(255 * r);
      g = Math.round(255 * g);
      b = Math.round(255 * b);
    }

    return [r, g, b];
  };
  rgb2cmyk = (color: number[], normalized?: boolean) => {
    let c = 1 - color[0] / 255;
    let m = 1 - color[1] / 255;
    let y = 1 - color[2] / 255;
    let k = Math.min(c, Math.min(m, y));

    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);

    if (!normalized) {
      c = Math.round(c * 10000) / 100;
      m = Math.round(m * 10000) / 100;
      y = Math.round(y * 10000) / 100;
      k = Math.round(k * 10000) / 100;
    }

    c = isNaN(c) ? 0 : Math.round(c);
    m = isNaN(m) ? 0 : Math.round(m);
    y = isNaN(y) ? 0 : Math.round(y);
    k = isNaN(k) ? 0 : Math.round(k);

    return [c.toString(), m.toString(), y.toString(), k.toString()];
  };
  /*
   * HSV (HSB) Convert
   * https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
   */
  hsv2rgb = (color: number[]) => {
    let h = color[0] / 360;
    let s = color[1] / 100;
    let v = color[2] / 100;
    let r: number, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0:
        [r, g, b] = [v, t, p];
        break;
      case 1:
        [r, g, b] = [q, v, p];
        break;
      case 2:
        [r, g, b] = [p, v, t];
        break;
      case 3:
        [r, g, b] = [p, q, v];
        break;
      case 4:
        [r, g, b] = [t, p, v];
        break;
      case 5:
        [r, g, b] = [v, p, q];
        break;
      default:
        [r, g, b] = [0, 0, 0];
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  };
  rgb2hsv = (color: number[]) => {
    const [r, g, b] = color;
    let max = Math.max(r, g, b),
      min = Math.min(r, g, b),
      delta = max - min,
      sat = max === 0 ? 0 : delta / max,
      val = max / 255;

    let hue = this.getHue([r, g, b]);

    return [
      hue.toString(),
      Math.round(sat * 100).toString(),
      Math.round(val * 100).toString(),
    ];
  };

  /*
   * HSL Convert
   * https://css-tricks.com/converting-color-spaces-in-javascript/
   */
  hsl2rgb = (color: number[]) => {
    const h = color[0];
    const s = color[1] / 100;
    const l = color[2] / 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      [r, g, b] = [c, x, 0];
    } else if (60 <= h && h < 120) {
      [r, g, b] = [x, c, 0];
    } else if (120 <= h && h < 180) {
      [r, g, b] = [0, c, x];
    } else if (180 <= h && h < 240) {
      [r, g, b] = [0, x, c];
    } else if (240 <= h && h < 300) {
      [r, g, b] = [x, 0, c];
    } else if (300 <= h && h < 360) {
      [r, g, b] = [c, 0, x];
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return [r, g, b];
  };

  rgb2hsl = (color: number[]) => {
    const r = color[0] / 255;
    const g = color[1] / 255;
    const b = color[2] / 255;

    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      sat = 0,
      light = 0;

    let hue = this.getHue([r, g, b]);

    light = (cmax + cmin) / 2;

    sat = delta == 0 ? 0 : delta / (1 - Math.abs(2 * light - 1));

    sat = +(sat * 100).toFixed(1);
    light = +(light * 100).toFixed(1);

    return [
      hue.toString(),
      Math.round(sat).toString(),
      Math.round(light).toString(),
    ];
  };

  /*
   * HWB Convert
   * ???
   */
  hwb2rgb = (color: number[]) => {
    let [hue, white, black] = color;
    white /= 100;
    black /= 100;
    if (white + black >= 1) {
      let gray = white / (white + black);
      return [gray, gray, gray];
    }
    let rgb = this.hsl2rgb4hwb(hue, 100, 50);
    for (let i = 0; i < 3; i++) {
      rgb[i] *= 1 - white - black;
      rgb[i] += white;
    }
    let r = Math.round(rgb[0] * 255);
    let g = Math.round(rgb[1] * 255);
    let b = Math.round(rgb[2] * 255);
    return [r,g,b];
  };
  hsl2rgb4hwb = (hue:number, sat: number, light:number) => {
    sat /= 100;
    light /= 100;

    function f(n:number) {
      let k = (n + hue / 30) % 12;
      let a = sat * Math.min(light, 1 - light);
      return light - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    }

    return [f(0), f(8), f(4)];
  };
  rgb2hwb = (color: number[]) => {
    const r = color[0] / 255;
    const g = color[1] / 255;
    const b = color[2] / 255;
    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);

    let hue = this.getHue([r, g, b]);
    const white = Math.round(minC * 100);
    const black = Math.round((1 - maxC) * 100);

    return hue.toString() + ',' + white.toString() +'%,' + black.toString() + '%';
  };

  getHue = (color: number[]) => {
    const [r, g, b] = color;
    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);
    const delta = maxC - minC;
    let hue = 0;

    if (maxC === r) {
      hue = (60 * ((g - b) / delta)) % 360;
    } else if (maxC == g) {
      hue = 60 * ((b - r) / delta) + 120;
    } else if (maxC == b) {
      hue = 60 * ((r - g) / delta) + 240;
    }

    return Math.round(hue);
  };
}
