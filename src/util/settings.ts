import { getSettings as storeGetSettings, saveSettings as storeSaveSettings } from './store';

export type SettingsState = {
  output?: {
    url?: string;
  };
};

let _settings: SettingsState;

export function saveSettings(settings: SettingsState) {
  _settings = settings;
  storeSaveSettings(_settings);
}

export function getSettings(): SettingsState {
  if (!_settings) {
    _settings = storeGetSettings();
  }
  return _settings;
}
