import { Settings } from '../types/settings';
import { StorageService } from './storageService';
import { Container, Service } from 'typedi';
import { SimpleEvent } from '../common/event';

@Service()
export class SettingService {
  private readonly storageService: StorageService = Container.get(StorageService);
  private settings?: Settings;

  public settingChanged = new SimpleEvent<Settings>();

  public getSettings(): Settings {
    if (!this.settings) {
      this.settings = this.storageService.loadSettings();
    }
    return this.settings;
  }

  public saveSettings(settings: Settings) {
    this.settings = settings;
    this.storageService.saveSettings(settings);
    this.settingChanged.emit(this.settings);
  }
}
