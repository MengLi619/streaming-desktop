import Store from 'electron-store';

export type SettingsState = {
  output?: {
    url?: string;
  };
};

const SETTINGS_KEY = 'settings';

const store = new Store();
let _settings: SettingsState;

export function saveSettings(settings: SettingsState) {
  _settings = settings;
  store.set(SETTINGS_KEY, _settings);
}

export function getSettings(): SettingsState {
  if (!_settings) {
    _settings = store.get(SETTINGS_KEY, {}) as SettingsState;
  }
  return _settings;
}
