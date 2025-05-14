import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { siteBlueprint } from '../site.blueprint';
import { IconsComponent } from '../../shared/icons/icons.component';
import { ClipboardComponent } from '../../shared/clipboard/clipboard.component';

@Component({
  selector: 'section[changeCase]',
  standalone: true,
  imports: [FormsModule, IconsComponent, ClipboardComponent],
  templateUrl: './change-case.component.html',
  styleUrl: './change-case.component.scss',
})
export class ChangeCaseComponent extends siteBlueprint implements OnInit {
  textOriginal = '';
  text = signal('');
  option = signal('');

  ngOnInit(): void {
    let storage = this.getStorage('changeCase');
    this.text.update((value) => storage.text);
    this.option.update((value) => storage.choice);
  }

  onChangeText(event: Event) {
    this.textOriginal = (<HTMLTextAreaElement>event.target).value;
    this.text.update((value) => this.textOriginal);
  }
  onChangeOptiuon(event: Event) {
    console.log(this.text());
    let newValue = (event.target as HTMLInputElement).value;
    this.option.update((value) => newValue);
    this.text.update((value) => this.changeText(this.text(), newValue));
  }

  changeText(text: string, option: string) {
    switch (option) {
      case 'lower':
        return text.toLowerCase();
      case 'upper':
        return text.toUpperCase();
      case 'capWord':
        let words = text.toLowerCase().split(' ');
        words.forEach((word, index) => {
          words[index] =
            [...word][0].toUpperCase() + [...word].slice(1).join('');
        });
        return words.join(' ');
      case 'capSentence':
        let sentences = text.toLowerCase().split(/[.,;:!?]/);
        sentences.forEach((sentence, index) => {
          let start = -1;
          for (let i = 0; i < sentence.length; i++) {
            let code = sentence.charCodeAt(i);
            if (
              (code > 47 && code < 58) || // numeric (0-9)
              (code > 64 && code < 91) || // upper alpha (A-Z)
              (code > 96 && code < 123) || // lower alpha (a-z)
              (code > 127 && code < 155) ||
              code == 164 ||
              code == 165 // Umlaute etc.
            ) {
              start = i;
              break;
            }
          }
          if (start >= 0) {
            sentences[index] =
              [...sentence].splice(0, start).join('') +
              [...sentence][start].toUpperCase() +
              [...sentence].slice(start + 1).join('');
          }
        });
        return sentences.join('.');
      default:
        return this.textOriginal;
    }
  }
}
