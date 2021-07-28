const stdin = process.stdin;

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

stdin.on("data", handleUserInput);

function handleUserInput(key){
  if (key === '\u0003') {
    process.exit();
  }
}

const setupInputFunc = setupInput;

module.exports = {
  setupInputFunc
}