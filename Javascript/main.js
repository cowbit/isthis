// lexical scope in javascript

function checkMe() {
  const name = "Robert";  
  
  function amIHuman() {
    // name is accessible here
    return name ? true : false;
  }
  
  return amIHuman();
}

// how about this case

function callSomething() {
  
}
