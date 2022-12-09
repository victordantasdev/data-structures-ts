import { describe, expect, it } from "@jest/globals"
import { Stack } from './Stack';
import { stackFunctional } from "./stack_functional";

describe('Test Stack class', () => {
  // const stack = new Stack();
  const stack = stackFunctional();

  it('shoud add two items and return them in a array', () => {
    stack.push(5);
    stack.push(8);
    expect(stack.get()).toStrictEqual([5, 8]);
  });

  it('shoud return the last item added to array', () => {
    expect(stack.peek()).toBe(8);
  });

  it('shoud add one more item to array and show the size of array', () => {
    stack.push(11);
    expect(stack.size()).toBe(3);
  });

  it('shoud check if array is empty', () => {
    expect(stack.isEmpty()).toBeFalsy();
  });

  it('shoud add one more item, then remove 2 items and return an array of two items', () => {
    stack.push(15);
    stack.pop();
    stack.pop();
    expect(stack.size()).toBe(2);
  });

  it('shoud clear the array', () => {
    stack.clear();
    expect(stack.isEmpty()).toBeTruthy();
  });
});
