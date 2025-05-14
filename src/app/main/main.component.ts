import { Component, model, ModelSignal } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ColorConvertComponent } from "./color-convert/color-convert.component";
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { PermissionGeneratorComponent } from './permission-generator/permission-generator.component';
import { ChangeCaseComponent } from './change-case/change-case.component';

import { Page } from '../environment';

@Component({
  selector: 'app-main',
  imports: [HomeComponent, ColorConvertComponent, PasswordGeneratorComponent, PermissionGeneratorComponent, ChangeCaseComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  activePage: ModelSignal<Page> = model.required();
}
