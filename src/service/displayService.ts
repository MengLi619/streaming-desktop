import { Service } from 'typedi';
import { ipcRenderer } from 'electron';

@Service()
export class DisplayService {

  public createOBSDisplay(electronWindowId: number, name: string, sourceId: string): void {
    ipcRenderer.sendSync('createOBSDisplay', electronWindowId, name, sourceId);
  }

  public moveOBSDisplay(name: string, x: number, y: number): void {
    ipcRenderer.sendSync('moveOBSDisplay', name, x, y);
  }

  public resizeOBSDisplay(name: string, width: number, height: number): void {
    ipcRenderer.sendSync('resizeOBSDisplay', name, width, height);
  }

  public destroyOBSDisplay(name: string): void {
    ipcRenderer.sendSync('destroyOBSDisplay', name);
  }

  public createOBSIOSurface(name: string): number {
    return ipcRenderer.sendSync('createOBSIOSurface', name);
  }
}
