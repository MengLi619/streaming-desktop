export function isDialogWindow() {
  const url = new URL(window.location.href);
  return url.searchParams.get('window') === 'dialog';
}

export function isMainWindow() {
  const url = new URL(window.location.href);
  return url.searchParams.get('window') === 'main';
}

export enum OS {
  Windows = 'win32',
  Mac = 'darwin',
}

export function getOS() {
  return process.platform as OS;
}

export function isMac(): boolean {
  return getOS() === OS.Mac;
}

export function sequence(start: number, end: number): number[] {
  const sequence: number[] = [];
  for (let i = start; i <= end; ++i) {
    sequence.push(i);
  }
  return sequence;
}
