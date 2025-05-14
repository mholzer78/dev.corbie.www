import { Component, OnInit } from '@angular/core';
import { siteBlueprint } from '../site.blueprint';

@Component({
  selector: 'section[loremImage]',
  standalone: true,
  imports: [],
  templateUrl: './lorem-image.component.html',
  styleUrl: './lorem-image.component.scss'
})
export class LoremImageComponent extends siteBlueprint implements OnInit {
  ngOnInit(): void {
  }
}
