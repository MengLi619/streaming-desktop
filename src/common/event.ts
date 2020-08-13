type Handler<T> = {
  tag: any;
  callback(data: T): void;
};

export class SimpleEvent<T> {
  private readonly handlers: Handler<T>[] = [];

  public on(tag: any, callback: (data: T) => void) {
    this.handlers.push({ tag, callback });
  }

  public off(tag: any) {
    const index = this.handlers.findIndex(h => h.tag === tag);
    if (index > -1) {
      this.handlers.splice(index, 1);
    }
  }

  public emit(data: T): void {
    this.handlers.forEach(h => h.callback(data));
  }
}
