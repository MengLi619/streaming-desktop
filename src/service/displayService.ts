import { Service } from 'typedi';
import { ipcRenderer } from 'electron';

@Service()
export class DisplayService {

  public createOBSDisplay(name: string, electronWindowId: number, scaleFactor: number, sourceId: string): void {
    ipcRenderer.sendSync('createOBSDisplay', name, electronWindowId, scaleFactor, sourceId);
  }

  public moveOBSDisplay(name: string, x: number, y: number, width: number, height: number): void {
    ipcRenderer.sendSync('moveOBSDisplay', name, x, y, width, height);
  }

  public destroyOBSDisplay(name: string): void {
    ipcRenderer.sendSync('destroyOBSDisplay', name);
  }
}
