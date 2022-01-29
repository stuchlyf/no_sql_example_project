export interface TransferObjectConstructor<T> {
  new (o: object | T): TransferObject<T>;
}

export interface TransferObject<T> {
  toObj(): T;
}
