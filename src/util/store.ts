import Store from 'electron-store';
import { SettingsState } from './settings';

const STORE_KEY_SETTINGS = 'settings';
const STORE_KEY_SHOW_ID = 'show_id';

const store = new Store();

export function getSettings(): SettingsState {
  return store.get(STORE_KEY_SETTINGS, {}) as SettingsState;
}

export function saveSettings(settings: SettingsState) {
  store.set(STORE_KEY_SETTINGS, settings);
}

export function getShowId(): string | undefined {
  return store.get(STORE_KEY_SHOW_ID) as string | undefined;
}

export function saveShowId(showId: string) {
  store.set(STORE_KEY_SHOW_ID, showId);
}
