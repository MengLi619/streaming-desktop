import Store from 'electron-store';
import { Settings } from '../types/settings';
import { Service } from 'typedi';

const STORAGE_KEY_SETTINGS = 'settings';

@Service()
export class StorageService {
  private readonly store = new Store();

  public saveSettings(settings: Settings) {
    this.store.set(STORAGE_KEY_SETTINGS, settings);
  }

  public loadSettings(): Settings {
    return this.store.get(STORAGE_KEY_SETTINGS, {}) as Settings;
  }
}
