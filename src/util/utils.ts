export function isWorkerWindow() {
  const url = new URL(window.location.href);
  return url.searchParams.get('windowId') === 'worker';
}

export function isMainWindow() {
  const url = new URL(window.location.href);
  return url.searchParams.get('windowId') === 'main';
}
