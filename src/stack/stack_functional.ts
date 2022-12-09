export const stackFunctional = <T,>() => {
  let items: Array<T> = [];

  const push = (element: T): void => {
    items = [...items, element];
  }

  const pop = (): T => {
    const [hd, ...tl] = items;
    items = [...tl];
    return hd;
  }

  const peek = (): T => {
    return items[items.length - 1]
  }

  const isEmpty = (): boolean => {
    return items.length === 0;
  }

  const clear = (): void => {
    items = [];
  }

  const size = (): number => {
    return items.length;
  }

  const get = (): Array<T> => {
    return items;
  }

  return {
    push,
    pop,
    peek,
    isEmpty,
    clear,
    size,
    get,
  }
}
