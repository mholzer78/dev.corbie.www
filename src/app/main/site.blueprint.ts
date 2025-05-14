import { inject } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

export abstract class siteBlueprint {
  private localStorageService = inject(LocalStorageService);
  private storageKey:
    | ''
    | 'color'
    | 'password'
    | 'permission'
    | 'changeCase'
    | 'loremIpsum'
    | 'loremImage' = '';

  getStorage(key: typeof this.storageKey) {
    return this.localStorageService.getProp(key);
  }
  setStorage(
    key: 'color'
      | 'password'
      | 'permission'
      | 'changeCase'
      | 'loremIpsum'
      | 'loremImage',
    value: {}
  ): void {
    this.localStorageService.setProp(key, value);
  }
}
