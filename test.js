class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name; // Must explicitly set the name of the custom error in this class if you want to use later.
    this.supername = super.name; // You can still get to the parent class name, you want.
  }
}

const testError = new MyError('test error message');
console.log(testError.message);
console.log(testError.name);
console.log(testError.supername);
