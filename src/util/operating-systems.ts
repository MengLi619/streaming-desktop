export enum OS {
  Windows = 'win32',
  Mac = 'darwin',
}

export function getOS() {
  return process.platform as OS;
}
