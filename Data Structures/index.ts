class MyArray<T> {
  private length: number;
  private data: {};

  constructor() {
    this.length = 0;
    this.data = {};
  }

  public get(index): T {
    return this.data[index];
  }

  public push(item): void {
    this.data[this.length] = item;
    this.length++;
  }

  public pop(): T {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  public delete(index): void {
    const item = this.data[index];
    this.shiftItems(index);
  }

  private shiftItems(index): void {
    for (let i = index; i < this.length - 1; i++)
      this.data[i] = this.data[i + 1];
    delete this.data[this.length - 1];
    this.length--;
  }
}

export { MyArray };
