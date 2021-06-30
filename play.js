const net = require("net");

// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
        host: '135.23.223.133',
        port: 50542
    });
    conn.setEncoding("utf8");

    conn.on('connect', () => {
        console.log('Free Shivcadoo');
    });

    return conn;
}


console.log("Connecting ...");
connect();