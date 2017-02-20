const ipc=require('node-ipc');
const UDP=new ipc.IPC;

ipc.config.id = 'test.drone';
ipc.config.retry= 1500;
ipc.config.rawBuffer=true;
ipc.config.encoding='ascii';
ipc.config.networkPort=44444;

UDP.config.id='c2d';
UDP.config.rawBuffer=true;
UDP.config.encoding='binary';
UDP.config.networkPort=54321;

ipc.serveNet(
    function(){
        ipc.server.on(
            'connect',
            function(socket){

            }
        );

        ipc.server.on(
            'data',
            function(data,socket){
                ipc.log('got a message', data);
                ipc.server.emit(
                    socket,
                    `{
                        "status":0,
                        "c2d_port":54321,
                        "arstream_fragment_size":65000,
                        "arstream_fragment_maximum_number":4,
                        "arstream_max_ack_interval":-1,
                        "c2d_update_port":51,
                        "c2d_user_port":61
                      }`
                );
            }
        );
    }
);

UDP.serveNet(
    'udp4',
    function(){
        UDP.server.on(
            'data',
            function(data){
                UDP.log('got a message from node app ', data, data.toString());
                UDP.server.emit(
                    {
                        address : 'localhost',
                        port    : 7778
                    },
                    data
                );
            }
        );
    }
);

ipc.server.start();
UDP.server.start();
