export type LinkedListNode<T> = {
    data: T;
    next: LinkedListNode<T>;
}

export function makeNode<T>(data: T, next: LinkedListNode<T>) {
    return {
        data, next
    };
}

export const terminus: LinkedListNode<never> = { data: undefined!, next: undefined! };