export class Stack<T> {
  constructor(private items: Array<T> = []) { }

  push(element: T) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length
  }

  get() {
    return this.items;
  }
}
