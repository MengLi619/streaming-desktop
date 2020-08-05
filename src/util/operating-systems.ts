export enum OS {
  Windows = 'win32',
  Mac = 'darwin',
}

type TOSHandlerMap<TReturn> = { [os in OS]: (() => TReturn) | TReturn };

export function byOS<TReturn>(handlers: TOSHandlerMap<TReturn>): TReturn {
  const handler = handlers[process.platform as OS];
  if (typeof handler === 'function') {
    return (handler as () => TReturn)();
  }
  return handler;
}

export function getOS() {
  return process.platform as OS;
}

export function isMac(): boolean {
  return getOS() === OS.Mac;
}
