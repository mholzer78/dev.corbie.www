import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClipboardComponent } from '../../shared/clipboard/clipboard.component';
import { IconsComponent } from '../../shared/icons/icons.component';
import { SiteBlueprint } from '../SiteBlueprint';

const characters = [
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'abcdefghijklmnopqrstuvwxyz',
  '0123456789',
  '.:,;!?-_#=+*/&@<>()[]{}',
];

@Component({
  selector: 'section[passwordGenerator]',
  standalone: true,
  imports: [FormsModule, ClipboardComponent, IconsComponent],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.scss',
})
export class PasswordGeneratorComponent
  extends SiteBlueprint
  implements OnInit, OnDestroy
{
  length = signal(0);
  char = signal(new Array<boolean>(5));
  showClear = false;
  passwordMasked = computed(() => '•'.repeat(this.length()));
  passwordClear = computed(() => this.generateString());

  ngOnInit(): void {
    let storage = this.getStorage('password');
    this.length.set(storage.length);
    this.char.set(storage.chars);
  }

  ngOnDestroy(): void {
    this.store2storage();
  }

  store2storage() {
    this.setStorage('password', { length: this.length(), chars: this.char() });
  }

  changeValue(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    let index = (event.target as HTMLInputElement).dataset['index'];
    let tempChar = this.char();
    tempChar[+index!] = value !== 'true';
    this.char.set([...tempChar]);
  }

  generateString() {
    this.store2storage();
    let threshold = '';
    let result = '';

    this.char().forEach((char, index) => {
      if (char && index !== 4) {
        threshold += characters[index];
      }
    });

    const charactersLength = threshold.length;
    const array = new Uint32Array(this.length());
    self.crypto.getRandomValues(array);
    array.forEach(random => {
      let randomArray = random.toString().split('');
      result += threshold.charAt(Math.floor(parseInt(randomArray[randomArray.length -1]) / 10 * charactersLength));
    });

    return result;
  }

  regenerate() {
    this.char.update((data) => {
      data[4] = !data[4];
      return [...data];
    });
  }
}
