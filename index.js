function testFunc() {
  console.log('This is a test!');
}

function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  return function fn() {
    console.log('This is also a test');
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('This is an anonymous test');
  }
}






