import { Component, input } from '@angular/core';

@Component({
  selector: 'app-clipboard',
  standalone: true,
  imports: [],
  templateUrl: './clipboard.component.html',
  styleUrl: './clipboard.component.scss',
})
export class ClipboardComponent {
  title = input.required<string>();
  value = input.required<string>();
  success = false;
  failure = false;

  copyToClipboard() {
    let inputEl = document.getElementById('clipboardInput') as HTMLTextAreaElement;

    inputEl.value = this.value();
    inputEl.select();
    inputEl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputEl.value);
    inputEl.value = '';

    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 2500);
  }
}
