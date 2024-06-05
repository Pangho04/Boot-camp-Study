/**
 * Implement a queue using two stacks.
 */

/**
 * Stack Class (You can use array in your logic)
 */
export const Stack = function () {
  // add an item to the top of the stack
  let arr = [];

  this.push = function (value) {
    // TODO: implement `push`
    arr.push(value);
    return arr;
  };

  // remove an item from the top of the stack
  this.pop = function () {
    // TODO: implement `pop`
    return arr.pop();
  };

  // return the number of items in the stack
  this.size = function () {
    // TODO: implement `size`
    return arr.length;
  };
};

/**
 * Queue Class
 */
export const Queue = function () {
  // Use two `stack` instances to implement your `queue` Class
  const inbox = new Stack();
  const outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function (value) {
    // TODO: implement `enqueue`
    return inbox.push(value);
  };

  // called to remove an item from the `queue`
  this.dequeue = function () {
    // TODO: implement `dequeue`
    while(inbox.size()>0) {
      outbox.push(inbox.pop());
    }

    return outbox.pop();
  };

  // return the number of items in the queue
  this.size = function () {
    // TODO: implement `size`
    if(outbox.size() !== 0) {
      return outbox.size();
    } else {
      return inbox.size();
    }
  };
};
