const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: 50542 },
    function(){
      console.log("We have connected!!");
    
    });
// interpret incoming data as text
  conn.setEncoding("utf8");
  const name = "APH";
  conn.on('connect', () => {
    conn.write(`Name: ${name}`); // looks for colon
    // setTimeout(() => {
    //     conn.write("Move: up")
    // }, 300)
    // setTimeout(() => {
    //     conn.write("Move: left")
    // }, 600)
    
  })
 
  return conn;
}

connect();

const connectFunc = connect;

module.exports = {
  connectFunc
}