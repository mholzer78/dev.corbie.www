import {
  Component,
  computed,
  OnInit,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClipboardComponent } from '../../shared/clipboard/clipboard.component';
import { IconsComponent } from '../../shared/icons/icons.component';
import { siteBlueprint } from '../site.blueprint';

const characters = [
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'abcdefghijklmnopqrstuvwxyz',
  '0123456789',
  '.:,;!?-_#=+*/&@<>()[]{}',
];

@Component({
  selector: 'section[passwordGenerator]',
  imports: [FormsModule, ClipboardComponent, IconsComponent],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.scss',
})
export class PasswordGeneratorComponent
  extends siteBlueprint
  implements OnInit
{
  length = signal(0);
  char = signal(new Array<boolean>(5));
  showClear = false;
  passwordMasked = computed(() => '•'.repeat(this.length()));
  passwordClear = computed(() => this.generateString());

  ngOnInit(): void {
    let storage = this.getStorage('password');
    this.length.update((value) => storage.length);
    this.char.update((value) => storage.chars);
  }

  changeValue(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    let index = (event.target as HTMLInputElement).dataset['index'];
    let tempChar = this.char();
    tempChar[+index!] = value !== 'true';
    this.char.update((values) => [...tempChar]);
  }

  generateString() {
    let threshold = '';
    let result = '';

    this.char().forEach((char, index) => {
      if (char) {
        threshold += characters[index];
      }
    });

    const charactersLength = threshold.length;
    for (let i = 0; i < this.length(); i++) {
      result += threshold.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  regenerate() {
    this.char.update((data) => {
      data[4] = !data[4];
      return [...data];
    });
  }
}
