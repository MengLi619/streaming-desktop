import * as Store from 'electron-store';
import { Service } from 'typedi';
import { Source } from '../../types/obs';

const STORAGE_KEY_SOURCES = 'sources';
const STORAGE_KEY_OUTPUT_URL = 'outputUrl';

@Service()
export class StorageService {
  private readonly store = new Store();

  public saveSources(sources: Record<number, Source>) {
    this.store.set(STORAGE_KEY_SOURCES, sources);
  }

  public loadSources(): Record<number, Source> {
    return this.store.get(STORAGE_KEY_SOURCES, []) as Record<number, Source>;
  }

  public saveOutputUrl(outputUrl: string) {
    this.store.set(STORAGE_KEY_OUTPUT_URL, outputUrl);
  }

  public loadOutputUrl(): string | undefined {
    return this.store.get(STORAGE_KEY_OUTPUT_URL);
  }
}
