import { ipcRenderer } from 'electron';
import * as uuid from 'uuid';
import { createDisplay, createOBSDisplay, createOBSIOSurface, createProgramLiveScene, createProgramLocalScene, createScene, destroyOBSDisplay, moveOBSDisplay, resizeOBSDisplay, setOBSDisplayPaddingColor } from './obs';

export type WorkerRequest =
  | 'createScene'
  | 'createDisplay'
  | 'createOBSDisplay'
  | 'setOBSDisplayPaddingColor'
  | 'moveOBSDisplay'
  | 'resizeOBSDisplay'
  | 'destroyOBSDisplay'
  | 'createOBSIOSurface'
  | 'createProgramLocalScene'
  | 'createProgramLiveScene'

const requestHandlers: Record<WorkerRequest, (...args: any[]) => Promise<any>> = {
  'createScene': createScene,
  'createDisplay': createDisplay,
  'createOBSDisplay': createOBSDisplay,
  'setOBSDisplayPaddingColor': setOBSDisplayPaddingColor,
  'moveOBSDisplay': moveOBSDisplay,
  'resizeOBSDisplay': resizeOBSDisplay,
  'destroyOBSDisplay': destroyOBSDisplay,
  'createOBSIOSurface': createOBSIOSurface,
  'createProgramLocalScene': createProgramLocalScene,
  'createProgramLiveScene': createProgramLiveScene,
};

const requestResolvers: Map<string, (response: any) => void> = new Map<string,  (response: any) => void>();

ipcRenderer.on('worker-request', async (event, data) => {
  const { id, request, args }: { id: string, request: WorkerRequest, args: any } = data;
  let response = await requestHandlers[request].apply(null, args);
  ipcRenderer.send('worker-response', { id, response });
});

ipcRenderer.on('worker-response', async (event, data) => {
  const { id, response } = data;
  const resolver = requestResolvers.get(id);
  requestResolvers.delete(id);
  if (resolver) {
    resolver(response);
  }
});

export async function requestWorker<T>(request: WorkerRequest, ...args: unknown[]): Promise<T> {
  const id = uuid.v4();
  ipcRenderer.send('worker-request', { id, request, args });
  return new Promise(resolve => requestResolvers.set(id, resolve));
}
