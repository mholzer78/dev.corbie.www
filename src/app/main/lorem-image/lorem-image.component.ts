import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { siteBlueprint } from '../site.blueprint';

@Component({
  selector: 'section[loremImage]',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lorem-image.component.html',
  styleUrl: './lorem-image.component.scss',
})
export class LoremImageComponent extends siteBlueprint implements OnInit {
  color = signal('#000000');
  width = signal(400);
  height = signal(200);

  ngOnInit(): void {
    let storage = this.getStorage('loremImage');
    this.color.set(storage.color);
    this.width.set(storage.width.toString());
    this.height.set(storage.height.toString());
    this.updateCanvas();
  }

  updateCanvas() {
    let colorArray = this.hex2rgb(this.color());
    let textColor = 'black';

    let fontSize = this.width() / 20;
    if (fontSize < 20) {
      fontSize = 20;
    }

    var o = Math.round(
      (colorArray[0] * 299 + colorArray[1] * 587 + colorArray[2] * 114) / 1000
    );
    if (o > 125) {
      textColor = 'black';
    } else {
      textColor = 'white';
    }

    let canvasPreview = document.getElementById(
      'canvasPreview'
    )! as HTMLCanvasElement;

    let ctx = canvasPreview.getContext('2d')!;

    ctx.canvas.width = this.width();
    ctx.canvas.height = this.height();

    ctx.clearRect(0, 0, this.width(), this.height());

    ctx.beginPath();
    ctx.rect(0, 0, this.width(), this.height());
    ctx.fillStyle = textColor;
    ctx.fill();

    ctx.beginPath();
    ctx.rect(0, 0, this.width(), this.height());
    ctx.fillStyle = 'rgba(' + colorArray.join(',') + ')';
    ctx.fill();

    ctx.font = fontSize + 'px SourceCode, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = textColor;
    ctx.fillText(
      this.width().toString() + 'px',
      this.width() / 2,
      this.height() / 2 - fontSize
    );
    ctx.fillText('x', this.width() / 2, this.height() / 2);
    ctx.fillText(
      this.height().toString() + 'px',
      this.width() / 2,
      this.height() / 2 + fontSize
    );
  }

  hex2rgb(hex: string) {
    var hexInt = parseInt(hex.slice(1), 16);
    var r = (hexInt >> 16) & 255;
    var g = (hexInt >> 8) & 255;
    var b = hexInt & 255;
    console.log(hex, r, g, b);
    return [r, g, b];
  }
}
