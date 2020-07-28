export function notEmpty<T>(object: T | undefined | null): T {
  if (!object) {
    throw new Error('object should not be empty');
  }
  return object;
}

export function nextTick(): Promise<void> {
  return new Promise<void>(resolve => process.nextTick(resolve));
}
