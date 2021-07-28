const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:IP, // IP address here,
    port:PORT },
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

const connectFunc = connect;

module.exports = {
  connectFunc
}