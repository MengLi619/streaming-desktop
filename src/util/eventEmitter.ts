export type EventListener = (...args: unknown[]) => void | Promise<void>;

export const eventEmitter = new class {
  private readonly events: Map<string, Map<object, EventListener>> = new Map<string, Map<object, EventListener>>();

  public on(eventName: string, target: object, listener: EventListener): void {
    const listeners = this.events.get(eventName) || new Map<object, EventListener>();
    listeners.set(target, listener);
  }

  public off(eventName: string, target: object): void {
    const listeners = this.events.get(eventName);
    if (listeners) {
      listeners.delete(target);
    }
  }

  public emit(eventName: string, ...args: unknown[]): void {
    const listeners = this.events.get(eventName);
    if (listeners) {
      listeners.forEach(listener => listener(args));
    }
  }
};
