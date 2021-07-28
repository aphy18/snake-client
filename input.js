let connection;
const stdin = process.stdin;

const setupInput = (conn) => {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  exitControlListener();
  handleUserInput();  
  return stdin;
};


const exitControlListener = () => {
    stdin.on("data", key => {
      if(key === '\u0003') {
        process.exit();
      }
    })
  }

const handleUserInput = () => {
  stdin.on("data", key => {
  console.log(key)
  if(key === 'w' || key === 'W') {
    connection.write("Move: up")
    connection.write("Say: Key Up")
  } else if (key === 'd' || key === 'D') {
    connection.write("Move: right")
    connection.write("Say: Key Right")
  } else if (key === 'a' || key === 'A') {
    connection.write("Move: left")
    connection.write("Say: Key Left")
  } else if (key === 's' || key == 'S') {
    connection.write("Move: down")
    connection.write("Say: Key Down")
  } else {
    connection.write("Say: REEEEEEEEEEE")
  }
})
}



const setupInputFunc = setupInput;

module.exports = {
  setupInputFunc
}