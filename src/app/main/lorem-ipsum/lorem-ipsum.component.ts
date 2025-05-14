import { Component, OnInit } from '@angular/core';
import { siteBlueprint } from '../site.blueprint';

@Component({
  selector: 'section[loremIpsum]',
  standalone: true,
  imports: [],
  templateUrl: './lorem-ipsum.component.html',
  styleUrl: './lorem-ipsum.component.scss'
})
export class LoremIpsumComponent extends siteBlueprint implements OnInit {
  ngOnInit(): void {
  }
}
