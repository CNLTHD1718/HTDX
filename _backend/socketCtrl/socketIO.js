var RequestRepo = require('../repo/requestRepos'),
    userRepo = require('../repo/userRepos'),
    moment = require('moment');
var requestRepo = new RequestRepo();
var eventGetAll = (io, client) => {
    requestRepo.loadAll_Request_Waiting()
        .then(rows => {
            io.sockets.emit('load-new-request', rows);
        })
        .catch(err => {
            io.sockets.emit('event-request-reciever', JSON.stringify({
                msg: 'error to get list request-reciever',
                err: err
            }));
            console.log(err);
        })
}

var eventGetAllReq = (io, client) => {
    requestRepo.LoadAll()
        .then(rows => {
            io.sockets.emit('event-request-management', JSON.stringify(rows));
        })
        .catch(err => {
            io.sockets.emit('event-request-management', JSON.stringify({
                msg: 'error to get list request-reciever',
                err: err
            }));
            console.log(err);
        })
}

module.exports.response = function (io, client) {
    //console.log(client.u_type);

    client.on('SEND_MESSAGE', function (data) {
        io.emit('MESSAGE', data)
    });

    client.on('add-new-request', function (data) {
        //newReq.iat = moment().unix();
        requestRepo.insert(data)
            .then(() => {
                console.log('even-add-request success');
                eventGetAll(io,client);
            })
            .catch(err => {
                console.log(err);
            })
        //io.emit('MESSAGE', data)

        //io.emit('load-new-request', data)
    });

   
}
