const http = require('http');
const app=require('./backend/app');
const debug=require('debug')('node-angular')
const normalizePort= val=>{
    var port=parseInt(val,10);
    if(isNaN(port)){
return val
    }
    if(port>=0){
        return port;
    }
    return false

}

const onListening=()=>{
    const addr=server.address();
    const bind=typeof addr==="string"?"pipe"+ addr.port:"port - "+addr.port;
    debug('listen on',bind)
}

const error = error =>{
    if(error.syscall !== "listen"){
        throw error;
    }
    const addr=server.address()
    const bind=typeof addr==="string"?"pipe"+ addr.port:"port - "+addr.port;
    switch(error.code){
        case "EACCESS":
            console.error(bind + "requires elevated previlage");
            process.exit(1);
            break;
            case "EADDRINUSE":
                console.error(bind + "already in use");
                process.exit(1);
                break;
        default:
            throw error;
    }
}
const port=normalizePort(process.env.PORT || 9000);
app.set('port',port);
const server =http.createServer(app);
server.on('listening',onListening);
server.on('error',error);
server.listen(port);