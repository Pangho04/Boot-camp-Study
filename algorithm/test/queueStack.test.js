import { expect } from "chai";
import { Stack, Queue } from "../lib/queueStack";

describe("Stack & Queue", function () {
  let stack, queue;

  beforeEach(function () {
    stack = new Stack();
    queue = new Queue();
  });

  describe("1. Stack", function () {
    it("should be able to add items", function () {
      stack.push(1);
      stack.push(2);
      stack.push(3);
    });

    it("should be able to remove items", function () {
      stack.push(3);
      stack.push(2);
      stack.push(1);
      expect(stack.pop()).to.eql(1);
      expect(stack.pop()).to.eql(2);
      expect(stack.pop()).to.eql(3);
    });

    it("should be able to tell us the size", function () {
      stack.push(3);
      stack.push(2);
      expect(stack.size()).to.eql(2);
      stack.push(1);
      expect(stack.size()).to.eql(3);
      stack.pop();
      expect(stack.size()).to.eql(2);
    });

    it("should be able to tell us the size of empty stack", function () {
      expect(stack.size()).to.eql(0);
    });
  });

  describe("2. Queue", function () {
    it("should be able to add items", function () {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
    });

    it("should be able to remove items", function () {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).to.eql(1);
      expect(queue.dequeue()).to.eql(2);
      expect(queue.dequeue()).to.eql(3);
    });

    it("should be able to tell us the size", function () {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.size()).to.eql(2);
      queue.enqueue(3);
      expect(queue.size()).to.eql(3);
      queue.dequeue();
      expect(queue.size()).to.eql(2);
    });

    it("should be able to tell us the size of empty queue", function () {
      expect(queue.size()).to.eql(0);
    });
  });
});
